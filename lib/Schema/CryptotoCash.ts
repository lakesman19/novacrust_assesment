import { z } from "zod";

// Form validation schema
export const cryptoToCashSchema = z.object({
  payAmount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
  cryptoAsset: z.string().min(1, "Please select a cryptocurrency"),
  fiatCurrency: z.string().min(1, "Please select a currency"),
  payFrom: z.string().min(1, "Please select a wallet to pay from"),
  payTo: z.string().min(1, "Please select a payment destination"),
});

// TypeScript type inference from schema
export type CryptoToCashFormData = z.infer<typeof cryptoToCashSchema>;


export const bankDetailsSchema = z.object({
  bankId: z.string().min(1),
  accountNumber: z.string().length(10),
  accountName: z.string().min(1),
});

export type BankDetailsData = z.infer<typeof bankDetailsSchema>;
