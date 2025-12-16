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
import { useViewStore } from "@/store/cryptoToCash"
import { z } from "zod"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export const contactDetailsSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    phoneNumber: z.string().min(7, { message: "Invalid phone number" }),
})

export type ContactDetailsData = z.infer<typeof contactDetailsSchema>

export const ContactDetails = () => {
    const { setView } = useViewStore()
    const form = useForm<ContactDetailsData>({
        resolver: zodResolver(contactDetailsSchema),
        defaultValues: {
            email: "",
            phoneNumber: "",
        },
    })

    return (
        <div className="w-full  flex justify-center items-center">
            <div className="w-9/10 flex flex-col justify-between h-full gap-12">

                {/* Header */}
                <div className="w-full flex items-center">
                    <ArrowLeft className="w-8 cursor-pointer" onClick={() => setView("bankDetails")} />
                    <span className="w-full flex justify-center items-center text-[20px] font-medium text-[#013941]">
                        Recipient Details
                    </span>
                </div>

                {/* Scrollable Form */}
                <div className="flex-1 overflow-y-auto">
                    <Form {...form}>
                        <form className="space-y-12">

                            {/* Email */}
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

                            {/* Phone Number */}
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <div className="flex h-[60px] rounded-[30px] border border-[#E0E0E0] overflow-hidden">
                                            <div className="flex items-center w-[100px] h-full bg-[#F2F2F2] px-3 rounded-l-[30px] gap-2 cursor-pointer">
                                                <Image
                                                    src="/images/icons/nig.png" // place Nigeria flag in public/flags/ng.png
                                                    alt="Nigeria flag"
                                                    width={24}
                                                    height={24}
                                                />
                                                <span className="text-[#013941] font-medium">+234</span>
                                            </div>
                                            <FormControl className="flex-1">
                                                <Input
                                                    placeholder="000 - 000 - 00000"
                                                    inputMode="numeric"
                                                    maxLength={10}
                                                    {...field}
                                                    className="h-full border-none rounded-r-[30px]"
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </form>
                    </Form>
                </div>

                {/* Bottom Button */}
                <div className="mt-4">
                    <Button
                        type="submit"
                        className="w-full bg-[#013941] text-white rounded-[30px] py-4 font-medium hover:bg-[#013941]/90 transition-colors h-[60px]"
                        onClick={form.handleSubmit(() => {
                            setView("address")
                            // handle form submit or next view
                        })}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
