


"use client"

import { cryptoAssets, paymentDestinations, wallets } from "../data";
import { Input } from "../ui/input";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cryptoToCashSchema, type CryptoToCashFormData } from "../../lib/Schema/CryptotoCash";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";
import { useViewStore } from "@/store/cryptoToCash";

const cryptoPricesNGN: Record<string, number> = {
    BTC: 30000000,
    ETH: 1800000,
    USDT: 800,
    BNB: 100000,
    LINK: 7000,
};

export const CryptoToCash = () => {
    const [openCrypto, setOpenCrypto] = useState(false);
    const [openFiat, setOpenFiat] = useState(false);
    const { currentView, setView, nextView, prevView } = useViewStore()
    const form = useForm<CryptoToCashFormData>({
        resolver: zodResolver(cryptoToCashSchema),
        defaultValues: {
            payAmount: "",
            cryptoAsset: "BTC",
            fiatCurrency: "NGN",
            payFrom: "",
            payTo: "",
        },
    });

    const payAmount = form.watch("payAmount");
    const cryptoAssetValue = form.watch("cryptoAsset");

    const selectedCryptoAsset = cryptoAssets.find(
        (asset) => asset.symbol === cryptoAssetValue
    );
    const nairaValue = useMemo(() => {
        const amount = parseFloat(payAmount || "0");
        const price = cryptoPricesNGN[cryptoAssetValue] || 0;
        return (amount * price).toLocaleString("en-NG", { style: "currency", currency: "NGN" });
    }, [payAmount, cryptoAssetValue]);

    const onSubmit = (data: CryptoToCashFormData) => {
        console.log("Form submitted:", data);
        setView("bankDetails")
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col gap-6 sm:gap-8">
                    {/* You Pay Section */}
                    <div className="w-full border border-[#E0E0E0] rounded-[30px] p-4 sm:p-6">
                        <h3 className="text-sm text-[#828282] mb-4">You pay</h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                            <FormField
                                control={form.control}
                                name="payAmount"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="0.00"
                                                className="border-none text-xl sm:text-2xl font-medium focus-visible:ring-0 focus-visible:ring-offset-0 p-0 shadow-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cryptoAsset"
                                render={({ field }) => (
                                    <FormItem>
                                        <Popover open={openCrypto} onOpenChange={setOpenCrypto}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={openCrypto}
                                                        className="w-full sm:w-auto justify-between border-none bg-[#F2F2F2] rounded-[20px] focus:ring-0 focus:ring-offset-0 hover:bg-[#F2F2F2]"
                                                    >
                                                        {selectedCryptoAsset ? (
                                                            <div className="flex items-center gap-2">
                                                                <Image
                                                                    src={selectedCryptoAsset.image}
                                                                    alt={selectedCryptoAsset.name}
                                                                    width={24}
                                                                    height={24}
                                                                    className="rounded-full"
                                                                    unoptimized
                                                                />
                                                                <span>{selectedCryptoAsset.symbol}</span>
                                                            </div>
                                                        ) : (
                                                            "Select crypto..."
                                                        )}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search crypto..." />
                                                    <CommandList>
                                                        <CommandEmpty>No crypto found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {cryptoAssets.map((asset) => (
                                                                <CommandItem
                                                                    key={asset.symbol}
                                                                    value={asset.symbol}
                                                                    onSelect={(currentValue) => {
                                                                        field.onChange(currentValue.toUpperCase());
                                                                        setOpenCrypto(false);
                                                                    }}
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <Image
                                                                            src={asset.image}
                                                                            alt={asset.name}
                                                                            width={24}
                                                                            height={24}
                                                                            className="rounded-full"
                                                                            unoptimized
                                                                        />
                                                                        <span>{asset.symbol}</span>
                                                                        <span className="text-[#828282] text-sm">
                                                                            {asset.name}
                                                                        </span>
                                                                    </div>
                                                                    <Check
                                                                        className={cn(
                                                                            "ml-auto h-4 w-4",
                                                                            field.value === asset.symbol
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                        )}
                                                                    />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* You Receive Section */}
                    <div className="w-full border border-[#E0E0E0] rounded-[30px] p-4 sm:p-6">
                        <h3 className="text-sm text-[#828282] mb-4">You receive</h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                            <Input
                                type="text"
                                placeholder="0.00"
                                readOnly
                                value={nairaValue}
                                className="flex-1 border-none text-xl sm:text-2xl font-medium focus-visible:ring-0 focus-visible:ring-offset-0 p-0 bg-transparent shadow-none"
                            />
                            <FormField
                                control={form.control}
                                name="fiatCurrency"
                                render={({ field }) => (
                                    <FormItem>
                                        <Popover open={openFiat} onOpenChange={setOpenFiat}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        disabled
                                                        aria-expanded={openFiat}
                                                        className="w-full sm:w-auto justify-between border-none bg-[#F2F2F2] rounded-[20px] focus:ring-0 focus:ring-offset-0 hover:bg-[#F2F2F2]"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Image
                                                                src={"/images/icons/nig.png"}
                                                                alt={"nig"}
                                                                width={24}
                                                                height={24}
                                                                className="rounded-full"
                                                                unoptimized
                                                            />
                                                            <span>{field.value}</span>
                                                        </div>
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search currency..." />
                                                    <CommandList>
                                                        <CommandEmpty>No currency found.</CommandEmpty>
                                                        <CommandGroup>
                                                            <CommandItem
                                                                value="NGN"
                                                                onSelect={(currentValue) => {
                                                                    field.onChange(currentValue.toUpperCase());
                                                                    setOpenFiat(false);
                                                                }}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-lg">🇳🇬</span>
                                                                    <span>NGN</span>
                                                                    <span className="text-[#828282] text-sm">
                                                                        Nigerian Naira
                                                                    </span>
                                                                </div>
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto h-4 w-4",
                                                                        field.value === "NGN" ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Pay From Section */}
                    <div>
                        <h3 className="text-sm text-[#828282] mb-4">Pay from</h3>
                        <FormField
                            control={form.control}
                            name="payFrom"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full border border-[#E0E0E0] bg-white h-[60px]! rounded-[30px] py-3 px-4">
                                                <SelectValue placeholder="Select an Option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {wallets.map((wallet) => (
                                                <SelectItem key={wallet.name} value={wallet.name}>
                                                    <div className="flex items-center gap-3">
                                                        <Image
                                                            src={wallet.logo}
                                                            alt={wallet.name}
                                                            width={32}
                                                            height={32}
                                                            className="rounded-lg"
                                                            unoptimized
                                                        />
                                                        <span className="font-medium">{wallet.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Pay To Section */}
                    <div>
                        <h3 className="text-sm text-[#828282] mb-4">Pay to</h3>
                        <FormField
                            control={form.control}
                            name="payTo"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full border border-[#E0E0E0] bg-white rounded-[30px] h-[60px]! py-3 px-4">
                                                <SelectValue placeholder="Select an Option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {paymentDestinations.map((destination) => (
                                                <SelectItem key={destination.type} value={destination.type}>
                                                    <div className="flex items-center gap-3">
                                                        {destination.logo.startsWith('http') ? (
                                                            <Image
                                                                src={destination.logo}
                                                                alt={destination.name}
                                                                width={32}
                                                                height={32}
                                                                className="rounded-lg"
                                                                unoptimized
                                                            />
                                                        ) : (
                                                            <span className="text-2xl">{destination.logo}</span>
                                                        )}
                                                        <div className="flex flex-col">
                                                            <span className="font-medium">{destination.name}</span>
                                                            {destination.description && (
                                                                <span className="text-xs text-[#828282]">
                                                                    {destination.description}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-[#013941] text-white rounded-[30px] py-4 font-medium hover:bg-[#013941]/90 transition-colors mt-2 h-[60px]"
                    >
                        Convert Now
                    </Button>
                </div>
            </form>
        </Form>
    );
};
