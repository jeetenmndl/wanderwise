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

const formSchema = z.object({
    collaboratorEmails: z.array(
        z.email({
            message: "Invalid email address.",
        })
    ).min(1, {
        message: "Atleast one email is required.",
    }),
})

export default function InviteCollaborator() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            collaboratorEmails: [""],
        },
    });

   const onSubmit = async (data) => {
          
       }

    return (
        <section className="h-dvh flex items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <Card className="w-100">
                        <CardHeader className={"flex items-center justify-between border-b"}>
                            <div>
                            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                            <CardDescription>Enter your credentials to sign in.</CardDescription>
                            </div>
                            <img className="w-10 h-10" src="/logo.png" alt="Wanderwise Logo" />
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="abc@gmail.com" type={"email"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="********" type={"password"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>

                        <CardFooter className="flex flex-col gap-4">
                            <Button className="w-full" type="submit">Submit</Button>

                            <p className="text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-700 underline">Register.</a></p>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </section>
    )
}