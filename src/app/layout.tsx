import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "@/components/ui/toaster";
import { jetbrains, thalehfatFont } from "@/styles/fonts";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/navbar";

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
        className={`${jetbrains.variable} ${thalehfatFont.variable} font-sans bg-[#0F172A]`}
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
