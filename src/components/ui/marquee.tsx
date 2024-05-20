"use client";

import Marquee from "react-fast-marquee";

import Image from "next/image";

export default function EventDetailsMarquee() {
  const count = 2;
  return (
    <Marquee className="h-[8vh] overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-4 opacity-25"
        >
          <h1
            className="text-9xl text-sky-50"
            style={{
              textShadow:
                "4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000",
            }}
          >
            COMING SOON
          </h1>
          <div className="flex items-center justify-center">
            <Image alt="mush" src="/assets/mush.png" width={100} height={50} />
          </div>
        </div>
      ))}
    </Marquee>
  );
}
