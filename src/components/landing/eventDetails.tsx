"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CoinsRow from "../ui/coins-line";
import EventDetailsMarquee from "../ui/marquee";

export default function EventDetails() {
  const [coinCenterCount, setCoinCenterCount] = useState(1);
  const [coinSideCount, setCoinSideCount] = useState(1);

  useEffect(() => {
    function updateCoinCounts() {
      const width = window.innerWidth;
      if (width < 800) {
        setCoinCenterCount(1);
        setCoinSideCount(1);
      } else if (width >= 800 && width < 1560) {
        setCoinCenterCount(3);
        setCoinSideCount(3);
      } else {
        setCoinCenterCount(5);
        setCoinSideCount(6);
      }
    }

    updateCoinCounts();
    window.addEventListener("resize", updateCoinCounts);

    return () => {
      window.removeEventListener("resize", updateCoinCounts);
    };
  }, []);

  const defaultWidth = 200;
  const defaultHeight = 250;

  return (
    <div className="relative flex min-h-full w-full flex-col items-center bg-slate-900 pb-16 pt-16">
      <EventDetailsMarquee />
      <div className="flex w-full flex-col items-center justify-center gap-6 px-2 pt-16 md:flex-row">
        <div className="flex flex-col items-center gap-8 pl-12 pr-12 md:items-start">
          <Image
            alt="eventDetails"
            src="/assets/eventDetails.png"
            width={defaultWidth}
            height={defaultHeight}
            className="
                            sm:h-75 md:h-90
                            lg:w-88 lg:h-110
                            sm:w-60 md:w-72
                        "
          />
        </div>
        <div className="flex flex-col items-center gap-6 pl-12 pr-12 md:items-start">
          <h1 className="gap-4 text-center sm:gap-0 md:text-left">
            <span className="px-2 text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
              WHAT IS
            </span>
            <span className="mt-2 block text-5xl text-amber-400 sm:mt-0 sm:text-6xl md:text-7xl lg:text-8xl">
              Techie Sleuths?
            </span>
          </h1>
          <p
            className="text-center font-mono text-lg leading-loose text-white md:text-left"
            style={{
              textShadow: "0 0 12px rgba(255, 255, 255, 0.49)",
              letterSpacing: "3px",
            }}
          >
            Techie Sleuths is a mystery-solving{" "}
            <span className="text-amber-400">adventure</span>
            <br />
            game organized by the Women in FOSS. This is
            <br />
            tailored for newcomers to{" "}
            <span className="text-amber-400">familiarize</span> themselves{" "}
            <br />
            with our Faculty of Computing.
          </p>
          <Link href="https://web.facebook.com/wifnsbm" target="_blank">
            <p className="flex cursor-pointer items-center text-center text-3xl text-white md:text-left">
              View past events <span className="ml-2">{">"}</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="pt-16">
        <CoinsRow centerCount={coinCenterCount} sideCount={coinSideCount} />
      </div>
    </div>
  );
}
