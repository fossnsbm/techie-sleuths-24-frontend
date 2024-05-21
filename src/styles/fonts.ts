import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const thalehfatFont = localFont({
  src: "../../public/fonts/ThaleahFat.ttf",
  display: "swap",
  weight: "500",
  variable: "--font-thalehfat",
});
