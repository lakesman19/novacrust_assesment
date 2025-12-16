"use client"

import { useViewStore } from "@/store/cryptoToCash"
import { ArrowLeft, Copy, InfoIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

export const Wallet = () => {
    const { setView } = useViewStore()
    const [copied, setCopied] = useState(false)

    const data = {
        amountToSend: "100ETH",
        network: "ETH",
        walletAddress: "4LiV4YjbxsL6739MKghUd",
        currency: "USDT",
        networkName: "CELO",
        wallet:"other"
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(data.walletAddress)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="w-full  flex justify-between flex-col items-center h-full">
            <div className="w-9/10 flex flex-col  gap-8 py-8">

                {/* Header */}
                <div className="w-full flex items-center">
                    <ArrowLeft
                        className="w-8 cursor-pointer"
                        onClick={() => setView("bankDetails")}
                    />
                    <span className="w-full flex justify-center items-center text-[20px] font-medium text-[#013941]">
                        Send {data.amountToSend} to the address below
                    </span>
                </div>

                {/* Wallet Address */}
                <div className="w-full flex justify-center items-center">
                    <button
                        onClick={handleCopy}
                        className="flex justify-center items-center border border-[#CCF6E5] bg-[#E6FBF2] rounded-[30px] min-w-[250px] py-2 gap-2"
                    >
                        {data.walletAddress} <Copy className="w-4 h-4" />
                        {copied && <span className="text-sm text-green-600 ml-2">Copied!</span>}
                    </button>
                </div>
                <div className="bg-[#F7F7F7] rounded-xl p-4 flex flex-col gap-4">

                    {/* Amount & Network */}
                    <div className="flex justify-between items-center">
                        <span className="text-[#013941] font-medium">Amount:</span>
                        <span className="text-[#013941] flex items-center gap-2">{data.amountToSend}  <Copy className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#013941] font-medium">Network:</span>
                        <span className="text-[#013941]">{data.network}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#013941] font-medium">Wallet:</span>
                        <span className="text-[#013941]">{data.wallet}</span>
                    </div>

                  
                </div>

          
                <div className=" flex items-start gap-3">
                    <InfoIcon className="w-5 h-5 text-[#013941]/80" />
                    <p className="text-sm text-[#013941] leading-5">
                        Only send {data.currency} to this address. Ensure the sender is on the {data.networkName} network, otherwise you might lose your deposit.
                    </p>
                </div>
              
            </div>
            <div className="mt-4 w-9/10">
                <Button
                    type="submit"
                    className="w-full bg-[#013941] text-white rounded-[30px] py-4 font-medium hover:bg-[#013941]/90 transition-colors h-[60px]"

                >
                    Next
                </Button>
            </div>
        </div>
    )
}
