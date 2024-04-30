import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function EventMarquee() {
  const count = 2;
  return (
    <Marquee className="h-[8vh] overflow-hidden ">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-row">
          <h1
            className="text-black text-9xl"
            style={{
              textShadow:
                "4px 4px 0 #fff, -4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff",
            }}
          >
            Techie sleuths 24
          </h1>
          <div className="flex justify-center items-center">
            <Image alt="mush" src="/assets/mush.png" width={100} height={50} />
          </div>
        </div>
      ))}
    </Marquee>
  );
}
