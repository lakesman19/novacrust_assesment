import { tabsLabel } from "@/components/data";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-white text-black">
      <Card className="bg-white border border-[#CCF6E5] min-w-[640px] min-h-[758px]">
        <Tabs defaultValue={tabsLabel[0]?.value} className="w-[400px]">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-2">
              {tabsLabel.map((item, index) => (
                <TabsTrigger key={index} value={item.value}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardHeader>
        </Tabs>

      </Card>
    </div>
  );
}
