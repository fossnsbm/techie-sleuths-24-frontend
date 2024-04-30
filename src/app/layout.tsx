import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const thalehfatFont = localFont({
  src: "../../public/fonts/ThaleahFat.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techie Sleuths '24🔎",
  description: "Techie Sleuths | Annual treasure hunt organized by WIF NSBM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${thalehfatFont.className}`}>
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
