"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { tabsLabel } from "@/components/data";
import { BankInformation } from "@/components/payment/BankPayment";
import { CashToCrypto } from "@/components/payment/CashToCrypto";
import { ContactDetails } from "@/components/payment/Contact";
import { CryptoToCash } from "@/components/payment/CryptoToCash";
import { Fiat } from "@/components/payment/Fiat";
import { Success } from "@/components/payment/Success";
import { Wallet } from "@/components/payment/Wallet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useViewStore } from "@/store/cryptoToCash";

export default function Home() {
  const { currentView } = useViewStore()
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans text-black p-4 sm:p-6">
      <Card className="bg-white border border-[#CCF6E5] min-w-full md:min-w-[640px] min-h-[758px] rounded-[30px] flex flex-col">
        {currentView === "all" && <Tabs defaultValue={tabsLabel[0]?.value} className="w-full flex flex-col items-center gap-6 sm:gap-12">
          <CardHeader className="w-full flex flex-col items-center pt-4 sm:pt-6 px-4 sm:px-6">
            <TabsList className="grid grid-cols-3 gap-2 bg-[#F2F2F2] rounded-[30px] w-full sm:w-auto  sm:p-0">
              {tabsLabel.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.value}
                  className="text-xs sm:text-sm data-[state=active]:bg-[#013941] data-[state=active]:text-white rounded-[30px] text-[#828282] px-2 sm:px-4 py-2"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardHeader>
          <CardContent className="w-full px-4 sm:px-6">
            <TabsContent value="cryptoToCash">
              <CryptoToCash />
            </TabsContent>
            <TabsContent value="cashToCrypto">
              <CashToCrypto />
            </TabsContent>
            <TabsContent value="cryptoToFiat">
              <Fiat />
            </TabsContent>
          </CardContent>
        </Tabs>}
        {currentView === "bankDetails" && <BankInformation />}
        {currentView === "recipientDetails" && <ContactDetails />}
        {currentView === "address" && <Wallet />}
        {currentView === "success" && <Success />}
      </Card>
    </div>
  );
}
