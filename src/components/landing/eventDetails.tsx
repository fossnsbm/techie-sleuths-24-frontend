"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
    <div className="w-full min-h-full bg-slate-900 relative flex flex-col items-center pt-16 pb-16">
      <EventDetailsMarquee />
      <div className="w-full flex flex-col md:flex-row justify-center items-center px-2 gap-6 pt-16">
        <div className="flex flex-col items-center md:items-start gap-8 pr-12 pl-12">
          <Image
            alt="eventDetails"
            src="/assets/eventDetails.png"
            width={defaultWidth}
            height={defaultHeight}
            className="
                            sm:w-60 sm:h-75
                            md:w-72 md:h-90
                            lg:w-88 lg:h-110
                        "
          />
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start pr-12 pl-12">
          <h1 className="text-center md:text-left gap-4 sm:gap-0">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2">
              WHAT IS
            </span>
            <span className="block mt-2 sm:mt-0 text-amber-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Techie Sleuths?
            </span>
          </h1>
          <p
            className="text-lg text-white font-mono leading-loose text-center md:text-left"
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
          <p className="text-3xl text-white cursor-pointer flex items-center text-center md:text-left">
            View past events <span className="ml-2">{">"}</span>
          </p>
        </div>
      </div>
      <div className="pt-16">
        <CoinsRow centerCount={coinCenterCount} sideCount={coinSideCount} />
      </div>
    </div>
  );
}
