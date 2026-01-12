import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Input } from "@/components/ui/input"

const budgetSchema = z.object({
    total: z.number(),
    spent: z.number().default(0)
})

const tripSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date(),
    destinations: z.array(
        z.string().min(2, { message: "Must be atleast two characters" })
    ).min(1, { message: "Choose atleast one destination" }),
    budget: budgetSchema,
}).refine(
    (data) => data.startDate < data.endDate,
    {
        message: "End date must be after start date",
        path: ["endDate", "startDate"]
    }
)

export default function TripForm({ tripInfo }) {

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

    const onAdd = (data) => {
        console.log(data);
    }

    const onEdit = (data) => {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(tripInfo? onEdit : onAdd)} className="space-y-8">
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
                <Button type="submit"> {tripInfo? "Edit Trip" : "Add Trip"} </Button>
            </form>
        </Form>
    )
}