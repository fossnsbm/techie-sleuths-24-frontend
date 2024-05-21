"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Countdown from "@/app/(client)/(pages)/underdev/_components/countdown";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 632);
    };

    // Check if window is defined (i.e., we're in a browser)
    if (typeof window !== "undefined") {
      // Set initial state
      checkScreenSize();
      // Add event listener
      window.addEventListener("resize", checkScreenSize);
    }

    return () => {
      // Remove event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-slate-900">
        <Image
          alt="Mountains"
          src="/assets/bg-img.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-section relative z-10 flex min-h-[75vh] flex-col items-center justify-center">
        <div className="logo md:w-500 md:h-500 mb-5 mt-10 sm:mb-10 sm:mt-20">
          <Image
            alt="Logo"
            src="/assets/logo (with year) 1.png"
            width={isSmallScreen ? 300 : 400}
            height={isSmallScreen ? 300 : 400}
          />
        </div>
        <Countdown />

        <h1
          className="mb-4 text-center text-2xl font-bold text-black md:text-3xl"
          style={{
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
          }}
        >
          most awaited puzzle solving game.
          <br /> this time,{" "}
          <span className="text-blue-500">it&apos;s different!</span>
        </h1>

        <div className="mb-10 flex min-h-full items-center gap-3 sm:flex-row sm:items-center">
          <Link href={"/register"}>
            <Button variant="default" size="lg" className="text-2xl">
              REGISTER NOW
            </Button>
          </Link>
          <Image
            alt="Logo"
            src="/assets/question-box.png"
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
}
