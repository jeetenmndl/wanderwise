import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import api from '@/api/axios'
import { toast } from 'sonner'

const formSchema = z.object({
    name: z
        .string()
        .min(3, "Baggage name must be at least 3 characters.")
        .max(32, "Baggage name must be at most 32 characters."),
})

const BaggageDialog = ({ type, selectedBaggage, tripId, setDependency, isOpen, setIsOpen }) => {
    console.log(selectedBaggage, type)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: type === 'edit' ? selectedBaggage.name : '',
        },
    })

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await api.post(`/${tripId}/baggages`, data);
            console.log(response);
            if (response.data?._id) {
                toast.success("Baggage added successfully!")
                setDependency(prev => prev + 1);
                form.reset();
            } else {
                toast.error("Some error occured.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Some error occured.");
        }
    }

        const onUpdate = async (data) => {
        console.log(data)
        try {
            const response = await api.put(`/${tripId}/baggages/${selectedBaggage?._id}`, data);
            console.log(response);
            if (response.data?._id) {
                toast.success("Baggage updated successfully!")
                setDependency(prev => prev + 1);
                form.reset();
                setIsOpen(false);
            } else {
                toast.error("Some error occured.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Some error occured.");
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={()=>{setIsOpen(!isOpen)}}>
            <DialogTrigger asChild>
                <Button><Plus />Add Baggage</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"mb-4"}> {type==='edit'? "Edit": "Add"} Item name.</DialogTitle>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(type === 'edit'? onUpdate: onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Eg: Medicine." type={"text"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="w-full" type="submit">Submit</Button>

                        </form>
                    </Form>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default BaggageDialog