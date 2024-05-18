import HeroSection from "@/components/landing/hero";

import Image from "next/image";

import EventMarquee from "./_components/marquee";
import QuestionBox from "./_components/question-box";

export default function Page() {
  return (
    <div className="relative h-full w-full bg-slate-900">
      <Image
        alt="Mountains"
        src="/assets/bg-img.webp"
        layout="fill"
        objectFit="cover"
      />
      <EventMarquee />
      <div className="relative flex h-[85vh] w-full flex-col items-center justify-center gap-8">
        <Image
          alt="start"
          src="/assets/start.png"
          width={150}
          height={150}
          className="animate-bounce hover:animate-spin"
        />
        <h1
          className="text-center text-5xl text-black "
          style={{
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
          }}
        >
          We are under development!
        </h1>
        <QuestionBox />
      </div>
      <HeroSection />
    </div>
  );
}
