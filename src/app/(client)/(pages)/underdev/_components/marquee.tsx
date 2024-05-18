import React from "react";
import Marquee from "react-fast-marquee";

import Image from "next/image";

export default function EventMarquee() {
  const count = 2;
  return (
    <Marquee className="h-[8vh] overflow-hidden ">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-row">
          <h1
            className="text-9xl text-black"
            style={{
              textShadow:
                "4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff",
            }}
          >
            Techie sleuths 24
          </h1>
          <div className="flex items-center justify-center">
            <Image alt="mush" src="/assets/mush.png" width={100} height={50} />
          </div>
        </div>
      ))}
    </Marquee>
  );
}
