"use client"

import { useViewStore } from "@/store/cryptoToCash"
import { CheckCircle, ArrowLeft, CircleCheck, Check, Copy } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import { toast } from "sonner"
export const Success = () => {
    const { setView } = useViewStore()

    const data = {
        amountSent: "100ETH",
        network: "ETH",
        walletAddress: "4LiV4YjbxsL6739MKghUd",
        transactionId: "TX1234567890",
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(data.transactionId)
        toast.success("Transaction ID copied to clipboard")
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-9/10 flex flex-col h-full py-8 gap-24">


                <div className="w-full flex items-center justify-center py-4">
                    <Image
                        src="/images/icons/Logo.png"
                        alt="Logo"
                        width={147}      // adjust width as needed
                        height={40}      // adjust height as needed
                        className="object-contain"
                    />
                </div>


                <div className="flex flex-col justify-center items-center gap-4">
                    <span className="w-16 h-16 bg-green-600 text-white p-2 rounded-full flex justify-center items-center">
                        <Check className="w-16 h-16" />
                    </span>
                    {/* <CheckCircle className="w-16 h-16 text-green-600" /> */}
                    <h2 className="text-2xl font-semibold text-[#013941]">Your transaction is processing.</h2>
                    <p className="text-center text-[#013941]/90 max-w-md">
                        The recipient will receive it shortly.
                    </p>

                    {/* Transaction Summary */}
                    <div className="bg-[#F7F7F7] rounded-xl p-4 w-full max-w-md flex flex-col gap-3 mt-4">

                        <div className="flex justify-between">
                            <span className="font-medium text-[#013941]">Transaction ID:</span>
                            <span className="text-[#013941] flex items-center gap-2">{data.transactionId}                     <Copy className="w-4 h-4 cursor-pointer" onClick={()=>handleCopy()} />
                            </span>
                        </div>
                    </div>
                </div>


                <div className="w-full text-center justify-center items-center">
                    <Button
                        className="text-[#013941] bg-transparent! hover:bg-transparent!"
                        onClick={() => setView("all")}
                    >
                        Go back to home
                    </Button>
                </div>
            </div>
        </div>
    )
}
