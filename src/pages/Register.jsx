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
import { registerUser } from "@/api/auth"
import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useEffect } from "react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be atleast 8 characters."
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be atleast 8 characters."
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export default function Register() {

    const { login, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token])

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
        const { name, email, password } = data;
        try {
            const response = await registerUser({ name, email, password });
            console.log(response);
            if (response.token) {
                login(response.user, response.token);
                navigate("/dashboard");
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Registration failed. Please try again.");
        }
    }

    return (
        <section className="h-dvh flex items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <Card className="w-100">
                        <CardHeader className={"flex items-center justify-between border-b"}>
                            <div>
                                <CardTitle className="text-2xl font-bold">Register</CardTitle>
                                <CardDescription>Enter your credentials to register.</CardDescription>
                            </div>
                            <img className="w-10 h-10" src="/logo.png" alt="Wanderwise Logo" />
                        </CardHeader>

                        <CardContent className="space-y-4">

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Harka Bahadur" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
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

                            <p className="text-sm text-gray-500">Already have an account? <a href="/signin" className="text-blue-700 underline">Signin.</a></p>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </section>
    )
}