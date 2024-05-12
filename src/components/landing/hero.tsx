"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Countdown from "@/app/(client)/(pages)/underdev/_components/countdown";
import { useEffect, useState } from "react";

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
    <div className="w-full min-h-screen relative">
      <div className="absolute inset-0 bg-slate-900">
        <Image
          alt="Mountains"
          src="/assets/bg-img.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative min-h-[75vh] z-10 hero-section flex justify-center items-center flex-col">
        <div className="logo mt-10 mb-5 sm:mt-20 sm:mb-10 md:w-500 md:h-500">
          <Image
            alt="Logo"
            src="/assets/logo (with year) 1.png"
            width={isSmallScreen ? 300 : 400}
            height={isSmallScreen ? 300 : 400}
          />
        </div>
        <Countdown />

        <h1
          className="text-black font-bold mb-4 text-center text-2xl md:text-3xl"
          style={{
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
          }}
        >
          most awaited puzzle solving game.
          <br /> this time,{" "}
          <span className="text-blue-500">it&apos;s different!</span>
        </h1>

        <div className="flex min-h-full items-center sm:flex-row sm:items-center gap-3 mb-10">
          <Button variant="default" size="lg">
            COMING SOON !!!
          </Button>
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
