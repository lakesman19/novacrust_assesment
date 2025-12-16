/* eslint-disable @typescript-eslint/no-unused-vars */
import { tabsLabel } from "@/components/data";
import { CashToCrypto } from "@/components/payment/CashToCrypto";
import { CryptoToCash } from "@/components/payment/CryptoToCash";
import { Fiat } from "@/components/payment/Fiat";
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

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans text-black">
      <Card className="bg-white border border-[#CCF6E5] min-w-[640px] min-h-[758px] rounded-[30px] flex flex-col">
        <Tabs defaultValue={tabsLabel[0]?.value} className="w-full flex flex-col items-center gap-12">
          <CardHeader className="w-full flex flex-col items-center">
            <TabsList className="grid grid-cols-3 bg-[#F2F2F2] rounded-[30px] w-[392px]">
              {tabsLabel.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.value}
                  className="data-[state=active]:bg-[#013941] data-[state=active]:text-white rounded-[30px] text-[#828282]"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardHeader>
          <CardContent className="w-full">
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
        </Tabs>
      </Card>
    </div>
  );
}