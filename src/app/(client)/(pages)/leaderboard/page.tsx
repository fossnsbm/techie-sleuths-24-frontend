import Image from "next/image";
import QuestionBox from "./_components/question-box";
import { BarList, Card } from "@tremor/react";

export default function Page() {
  const data = [
    {
      name: "Google",
      value: 351,
      href: "https://google.com",
      
    },
    {
      name: "GitHub",
      value: 271,
      href: "https://github.com/tremorlabs/tremor",
      
    },
    {
      name: "Reddit",
      value: 191,
      href: "https://reddit.com",
      
    },
    {
      name: "Youtube",
      value: 91,
      href: "https://www.youtube.com/@tremorlabs3079",
      
    },
  ];

  return (
    <div className="w-full h-full relative bg-slate-900">
      <Image
        alt="Mountains"
        src="/assets/bg-img.webp"
        layout="fill"
        objectFit="cover"
      />
      <Card className="mx-auto max-w-lg">
        <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
          <span>Team Name</span>
          <span>Points</span>
        </p>
        <BarList data={data} className="mt-2" />
      </Card>

      {/* <div className="w-full h-[85vh] relative flex justify-center items-center flex-col gap-8">
        <Image
          alt="start"
          src="/assets/start.png"
          width={150}
          height={150}
          className="animate-bounce hover:animate-spin"
        />
        <h1
          className="text-black text-5xl text-center "
          style={{
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
          }}
        >
          The Leaderboard will be available when the event starts!
        </h1>
        <QuestionBox />
      </div> */}
    </div>
  );
}
