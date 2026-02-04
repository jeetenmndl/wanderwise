import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"
import api from "@/api/axios"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router-dom"

const activitySchema = z.object({
    name: z.string().min(3, "Must be atleast 3 characters"),
    time: z.string().min(3, "Must be atleast 3 characters"),
    notes: z.array(
        z.string().min(3, "Must be atleast 3 characters")
    ).min(1, "Atleast one note is required")
})

const itinerariesSchema = z.object({
    title: z.string().min(3, "Must be atleast 3 characters"),
    description: z.string().optional(),
    date: z.string(),
    activities: z.array(activitySchema).min(1, "Atleast one activity is required")
})

const ItinerariesForm = ({ type, itineraryInfo, thisDate }) => {

    const {tripId} = useParams();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(itinerariesSchema),
        defaultValues: type === "edit" ? itineraryInfo : {
            title: "",
            description: "",
            date: thisDate || new Date().toISOString().split("T")[0],
            activities: [{
                name: "",
                time: "",
                notes: [""]
            }]
        },
    })

    const { fields: activityFields, append: appendActivity, remove: removeActivity } = useFieldArray({
        control: form.control,
        name: "activities"
    })

   const onAdd = async (data) => {
        console.log("on add function",data);
        try {
               const response = await api.post(`/${tripId}/itineraries`, data);
               console.log(response);
               if(response.data?._id){
                    toast.success("Itinerary created successfully!")
                   navigate(`/itineraries/${tripId}`);
               }else{
                   toast.error("Some error occured.");
               }
           } catch (error) {
               console.log(error);
               toast.error("Some error occured.");
           }
    }

    const onEdit = async (data) => {
        console.log(data);
        try {
               const response = await api.patch(`/${tripId}/itineraries/${itineraryInfo._id}`, data);
               console.log(response);
               if(response.data?._id){
                    toast.success("Itinerary updated successfully!")
                   navigate(`/itineraries/${tripId}`);
               }else{
                   toast.error("Some error occured.");
               }
           } catch (error) {
               console.log(error);
               toast.error("Some error occured.");
           }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(type==="edit"? onEdit : onAdd)} className="space-y-8">

                <Card>
                    <CardHeader>
                        <CardTitle>Itinerary Details</CardTitle>
                        <CardDescription>Fill details about the itinerary</CardDescription>
                    </CardHeader>
                    <CardContent className={"space-y-4"}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Itinerary Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Itinerary Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} disabled={(thisDate || type==="edit")? true : false} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </CardContent>
                </Card>

                <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>Activities</h3>
                    <Button type="button" variant='outline'
                        onClick={() => {
                            appendActivity({
                                name: "",
                                time: "",
                                notes: [""]
                            })
                        }}
                    >
                        <Plus /> Add Activity
                    </Button>
                </div>

                {
                    activityFields.map((activity, index) => {
                        return (
                            <ActivityCard key={activity.id} activity={activity} index={index} form={form} removeActivity={removeActivity}/>
                        )
                    })
                }

                <Button type="submit">Submit</Button> 

            </form>
        </Form>
    )
}

export default ItinerariesForm

const ActivityCard = ({activity, index, form, removeActivity}) => {
    
    const { fields: notesFields, append: appendNote, remove: removeNote } = useFieldArray({
        control: form.control,
        name: `activities.${index}.notes`
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>Activity {index + 1}</CardTitle>
                <CardAction className="flex gap-2">
                    <Button type="button" size='sm' variant="outline"
                        onClick={() => {
                            appendNote("")
                        }}
                    >
                        <Plus /> Add Note
                    </Button>
                    <Button type="button" size='sm' variant="outline"
                        onClick={() => {
                            removeActivity(index)
                        }}
                        className={"text-red-600 hover:text-600"}
                    >
                        <Trash2 /> Delete Activity
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className={"space-y-4"}>
                <FormField
                    control={form.control}
                    name={`activities.${index}.name`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Activity Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Launch" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`activities.${index}.time`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Activity Time</FormLabel>
                            <FormControl>
                                <Input placeholder="At Noon" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    <h3 className='text-sm font-semibold'>Notes</h3>
                </div>

                {
                    notesFields.map((note, noteIndex) => {
                        return (
                            <div key={note.id} className="flex w-full items-end gap-2 ">

                                <FormField
                                    control={form.control}
                                    name={`activities.${index}.notes.${noteIndex}`}
                                    render={({ field }) => (
                                        <FormItem className={"w-full"}>
                                            <FormControl>
                                                <Input placeholder="Don't forget to carry passport." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="button" size="icon" variant="outline" onClick={() => { removeNote(noteIndex) }} >
                                    <Trash2 className="text-red-600" />
                                </Button>
                            </div>
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}