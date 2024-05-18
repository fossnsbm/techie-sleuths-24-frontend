import type { Metadata } from "next";

import { ReduxProvider } from "@/store/provider";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";

import { jetbrains, thalehfatFont } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Techie Sleuths '24",
  description: "Techie Sleuths | Annual treasure hunt organized by WIF NSBM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} ${thalehfatFont.variable} bg-[#0F172A] font-sans`}
      >
        <ReduxProvider>
          <NavBar />

          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
