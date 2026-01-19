import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

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
import { useNavigate } from "react-router-dom"

const budgetSchema = z.object({
    total: z.coerce.number(),
    spent: z.coerce.number().default(0)
})

const tripSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    destinations: z.array(
        z.string().min(2, { message: "Must be atleast two characters" })
    ).min(1, { message: "Choose atleast one destination" }),
    budget: budgetSchema,
}).refine(
    (data) => data.startDate < data.endDate,
    {
        message: "End date must be after start date",
        path: ["endDate"]
    }
)

export default function TripForm({ tripInfo }) {

    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(tripSchema),
        defaultValues: tripInfo || {
            title: "",
            description: "",
            startDate: new Date(),
            endDate: new Date(),
            destinations: [],
            budget: {
                total: 0,
                spent: 0,
            }
        },
    });

    const { fields: destinationFields, append: addDestination, remove: removeDestination } = useFieldArray({
        control: form.control,
        name: "destinations",
    });

    const onAdd = async (data) => {
        console.log("on add function",data);
        try {
               const response = await api.post("/trips", data);
               console.log(response);
               if(response.data?._id){
                    toast.success("Trip created successfully!")
                   navigate("/trips");
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
               const response = await api.patch(`/trips/${tripInfo._id}`, data);
               console.log(response);
               if(response.data?._id){
                    toast.success("Trip updated successfully!")
                   navigate("/trips");
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
            <form onSubmit={form.handleSubmit(tripInfo ? onEdit : onAdd)} className="space-y-8">

                <Card>
                    <CardHeader>
                        <CardTitle>Trip Details</CardTitle>
                        <CardDescription>Fill details about the trip</CardDescription>
                    </CardHeader>
                    <CardContent className={"space-y-4"}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Trip Title</FormLabel>
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
                                    <FormLabel>Trip Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Trip Destinations</CardTitle>
                        <CardDescription>Enter the places you want to visit.</CardDescription>
                        <CardAction>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={()=>{addDestination("")}}
                            >
                                <Plus />
                                Add
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className={"space-y-4"}>
                        {
                            destinationFields.map((field, index) => {
                                return (
                                    <div key={index} className="flex w-full items-end gap-2 ">

                                        <FormField
                                            control={form.control}
                                            name={`destinations.${index}`}
                                            render={({ field }) => (
                                                <FormItem className={"w-full"}>
                                                    <FormLabel>Destination {index + 1}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Eiffel Tower" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="button" size="icon" variant="outline" onClick={()=>{removeDestination(index)}} >
                                            <Trash2 className="text-red-600" />
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Budget Details</CardTitle>
                        <CardDescription>Fill the total budget for your trip</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="budget.total"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Total Budget</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="eg: 5000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit"> {tripInfo ? "Edit Trip" : "Add Trip"} </Button>
            </form>
        </Form>
    )
}