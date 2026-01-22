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
import { Input } from "@/components/ui/input"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"
import { MailPlus, Plus, Trash2 } from "lucide-react"
import api from "@/api/axios"

const formSchema = z.object({
    collaboratorEmails: z.array(
        z.email({
            message: "Invalid email address.",
        })
    ).min(1, {
        message: "Atleast one email is required.",
    }),
})

export default function InviteCollaborator({trip, setDependency}) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            collaboratorEmails: [""],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "collaboratorEmails",
    });

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await api.post(`/trips/${trip._id}/invite`, data);
            if(response.status === 200){
                toast.success("Invitations sent successfully!");
                form.reset();
            }else{
                toast.error("Failed to send invitations. Please try again.");
            }
        } catch (error) {
            console.error("Error inviting collaborators:", error);
            toast.error("An error occurred while sending invitations.");
        }
    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <Card className="w-100">
                        <CardHeader className={"flex items-center justify-between border-b"}>
                            <div>
                                <CardTitle>Invite Collaborator</CardTitle>
                                <CardDescription>Enter emails of your collaborators.</CardDescription>
                            </div>
                            <img className="w-10 h-10" src="/logo.png" alt="Wanderwise Logo" />
                        </CardHeader>

                        <CardContent className="space-y-2">
                            {
                                fields.map((field, index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-2 w-full">
                                            <FormField
                                                control={form.control}
                                                name={`collaboratorEmails[${index}]`}
                                                render={({ field }) => (
                                                    <FormItem className={"w-full"}>
                                                        <FormControl>
                                                            <Input placeholder="abc@gmail.com" type={"email"} {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <Button type="button"
                                            variant="outline"
                                            size="icon"
                                            onClick={()=>{remove(index)}}
                                            >
                                                <Trash2 size={20} className="text-red-600" />
                                            </Button>
                                        </div>
                                    )
                                })
                            }

                        </CardContent>

                        <CardFooter className="grid grid-cols-2 gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => { append("") }}
                            >
                                <Plus /> Add Email</Button>

                            <Button className="w-full" type="submit"><MailPlus />Invite</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </section>
    )
}