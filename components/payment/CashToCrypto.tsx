"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { z } from "zod"
import { toast } from "sonner"

// Zod schema for email validation
const cashToCryptoSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
})

export type CashToCryptoFormData = z.infer<typeof cashToCryptoSchema>

export const CashToCrypto = () => {
    const form = useForm<CashToCryptoFormData>({
        resolver: zodResolver(cashToCryptoSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = (data: CashToCryptoFormData) => {
        console.log("Email submitted:", data.email)
        toast.success("You will be notified when Cash to Crypto is live!")
        form.reset()
    }

    return (
        <div className="w-full flex justify-center px-4 sm:px-8">
            <div className="w-full max-w-xl flex flex-col gap-6 py-12">
                <h1 className="text-[#013941] text-2xl sm:text-3xl font-medium text-center">Coming Soon!</h1>
                <div className="">
                    <p className="text-[#4F4F4F] text-base sm:text-lg text-center">
                        Cash to Crypto is almost here.
                    </p>

                    <p className="text-[#4F4F4F] text-base sm:text-lg text-center">  Enter your email and we’ll let you know the moment it’s live.
                    </p>
                </div>

                <Form {...form}>
                    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            {...field}
                                            className="h-[60px] rounded-[30px] border-[#E0E0E0]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="mt-4">
                            <Button
                                type="submit"
                                className="w-full bg-[#013941] text-white rounded-[30px] py-4 font-medium hover:bg-[#013941]/90 transition-colors h-[60px]"
                            >
                                Update me
                            </Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div >
    )
}
