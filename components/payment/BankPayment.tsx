// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "../ui/form"
// import { Input } from "../ui/input"
// import { Button } from "../ui/button"
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
// import {
//     Command,
//     CommandInput,
//     CommandList,
//     CommandItem,
//     CommandEmpty,
// } from "../ui/command"
// import { ArrowLeft, Check, ChevronDown } from "lucide-react"
// import { bankDetailsSchema, type BankDetailsData } from "../../lib/Schema/CryptotoCash"
// import { nigerianBanks } from "../data"
// import { useViewStore } from "@/store/cryptoToCash"

// export const BankInformation = () => {
//     const [open, setOpen] = useState(false)
//     const [selectedBank, setSelectedBank] = useState<{ id: number; name: string } | null>(null)
//     const { setView } = useViewStore()
//     const form = useForm<BankDetailsData>({
//         resolver: zodResolver(bankDetailsSchema),
//         defaultValues: {
//             bankId: "",
//             accountNumber: "",
//             accountName: "",
//         },
//     })

//     return (
//         <div className="w-full flex justify-center items-center ">
//             <div className="w-9/10 flex flex-col justify-between min-h-full gap-12">

//                 {/* Header */}
//                 <div className="w-full flex items-center">
//                     <ArrowLeft className="w-8 cursor-pointer" onClick={() => setView("all")} />
//                     <span className="w-full flex justify-center items-center text-[20px] font-medium text-[#013941]">
//                         Recipient Details
//                     </span>
//                 </div>

//                 {/* Scrollable Form */}
//                 <div className="flex-1 overflow-y-auto">
//                     <Form {...form}>
//                         <form className="space-y-12">
//                             <FormField
//                                 control={form.control}
//                                 name="bankId"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Bank</FormLabel>
//                                         <Popover open={open} onOpenChange={setOpen}>
//                                             <PopoverTrigger asChild>
//                                                 <FormControl>
//                                                     <Button
//                                                         variant="outline"
//                                                         role="combobox"
//                                                         className="w-full justify-between h-[60px] rounded-[30px] border-[#E0E0E0] text-[#013941]"
//                                                     >
//                                                         {selectedBank ? selectedBank.name : "Select an Option"}
//                                                         <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                                                     </Button>
//                                                 </FormControl>
//                                             </PopoverTrigger>
//                                             <PopoverContent className="min-w-full p-0">
//                                                 <Command>
//                                                     <CommandInput placeholder="Search bank..." />
//                                                     <CommandEmpty>No bank found.</CommandEmpty>
//                                                     <CommandList>
//                                                         {nigerianBanks.map((bank) => (
//                                                             <CommandItem
//                                                                 key={bank.id}
//                                                                 onSelect={() => {
//                                                                     setSelectedBank(bank)
//                                                                     field.onChange(bank.id.toString())
//                                                                     setOpen(false)
//                                                                 }}
//                                                             >
//                                                                 {bank.name}
//                                                                 {selectedBank?.id === bank.id && (
//                                                                     <Check className="ml-auto h-4 w-4" />
//                                                                 )}
//                                                             </CommandItem>
//                                                         ))}
//                                                     </CommandList>
//                                                 </Command>
//                                             </PopoverContent>
//                                         </Popover>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />

//                             <FormField
//                                 control={form.control}
//                                 name="accountNumber"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Account number</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 placeholder="Enter your account number"
//                                                 inputMode="numeric"
//                                                 maxLength={10}
//                                                 className="h-[60px] rounded-[30px] border-[#E0E0E0]"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />

//                             <FormField
//                                 control={form.control}
//                                 name="accountName"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Account name</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 placeholder="Account name"
//                                                 readOnly
//                                                 className="h-[60px] rounded-[30px] border-[#E0E0E0] disabled:bg-[#F2F2F2] bg-[#F2F2F2]"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                         </form>
//                     </Form>
//                 </div>

//                 {/* Bottom Button */}
//                 <div className="mt-4">
//                     <Button
//                         type="submit"
//                         className="w-full bg-[#013941] text-white rounded-[30px] py-4 font-medium hover:bg-[#013941]/90 transition-colors h-[60px]"
//                         onClick={form.handleSubmit(() => {
//                             // handle form submit or next view
//                         })}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }
"use client"

import { useState, useEffect } from "react"
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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import {
    Command,
    CommandInput,
    CommandList,
    CommandItem,
    CommandEmpty,
} from "../ui/command"
import { ArrowLeft, Check, ChevronDown, Loader2 } from "lucide-react"
import { bankDetailsSchema, type BankDetailsData } from "../../lib/Schema/CryptotoCash"
import { nigerianBanks } from "../data"
import { useViewStore } from "@/store/cryptoToCash"

export const BankInformation = () => {
    const [open, setOpen] = useState(false)
    const [selectedBank, setSelectedBank] = useState<{ id: number; name: string } | null>(null)
    const [isVerifying, setIsVerifying] = useState(false)
    const { setView } = useViewStore()
    const form = useForm<BankDetailsData>({
        resolver: zodResolver(bankDetailsSchema),
        defaultValues: {
            bankId: "",
            accountNumber: "",
            accountName: "",
        },
    })

    const accountNumber = form.watch("accountNumber")

    useEffect(() => {
        if (accountNumber.length === 10) {
            setIsVerifying(true)
            const timer = setTimeout(() => {
                form.setValue("accountName", "Onanuga Yusuf Olalekan")
                setIsVerifying(false)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [accountNumber])

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-9/10 flex flex-col justify-between min-h-full gap-12">

                {/* Header */}
                <div className="w-full flex items-center">
                    <ArrowLeft className="w-8 cursor-pointer" onClick={() => setView("all")} />
                    <span className="w-full flex justify-center items-center text-[20px] font-medium text-[#013941]">
                        Recipient Details
                    </span>
                </div>

                {/* Scrollable Form */}
                <div className="flex-1 overflow-y-auto">
                    <Form {...form}>
                        <form className="space-y-12">
                            <FormField
                                control={form.control}
                                name="bankId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bank</FormLabel>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className="w-full justify-between h-[60px] rounded-[30px] border-[#E0E0E0] text-[#013941]"
                                                    >
                                                        {selectedBank ? selectedBank.name : "Select an Option"}
                                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="min-w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search bank..." />
                                                    <CommandEmpty>No bank found.</CommandEmpty>
                                                    <CommandList>
                                                        {nigerianBanks.map((bank) => (
                                                            <CommandItem
                                                                key={bank.id}
                                                                onSelect={() => {
                                                                    setSelectedBank(bank)
                                                                    field.onChange(bank.id.toString())
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                                {bank.name}
                                                                {selectedBank?.id === bank.id && (
                                                                    <Check className="ml-auto h-4 w-4" />
                                                                )}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="accountNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your account number"
                                                inputMode="numeric"
                                                maxLength={11}
                                                className="h-[60px] rounded-[30px] border-[#E0E0E0]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="accountName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Account name"
                                                    readOnly
                                                    className="h-[60px] rounded-[30px] border-[#E0E0E0] disabled:bg-[#F2F2F2] bg-[#F2F2F2]"
                                                    {...field}
                                                />
                                                {isVerifying && (
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                        <Loader2 className="w-5 h-5 animate-spin text-[#013941]" />
                                                    </div>
                                                )}
                                            </div>
                                        </FormControl>
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
                            setView("recipientDetails")
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
