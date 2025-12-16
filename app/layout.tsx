import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: "Novacrust",
  description: "Crypto app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={``}
      >
        <Toaster position="top-center" closeButton richColors />
        {children}
      </body>
    </html>
  );
}
