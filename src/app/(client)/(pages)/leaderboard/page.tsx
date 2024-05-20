
import Image from "next/image";
import QuestionBox from "./_components/question-box";
import { BarList, Card } from "@tremor/react";

export default function Page() {
  const data = [
    {
      rank: 1,
      name: "Google",
      value: 351,
      href: "https://google.com",
    },
    {
      rank: 2,
      name: "GitHub",
      value: 271,
      href: "https://github.com/tremorlabs/tremor",
    },
    {
      rank: 3,
      name: "Reddit",
      value: 191,
      href: "https://reddit.com",
    },
    {
      rank: 4,
      name: "Youtube",
      value: 91,
      href: "https://www.youtube.com/@tremorlabs3079",
    },
    {
      rank: 5,
      name: "Google",
      value: 351,
      href: "https://google.com",
    },
    {
      rank: 6,
      name: "GitHub",
      value: 271,
      href: "https://github.com/tremorlabs/tremor",
    },
    {
      rank: 7,
      name: "Reddit",
      value: 191,
      href: "https://reddit.com",
    },
    {
      rank: 8,
      name: "Youtube",
      value: 91,
      href: "https://www.youtube.com/@tremorlabs3079",
    },
    {
      rank: 9,
      name: "Google",
      value: 351,
      href: "https://google.com",
    },
    {
      rank: 10,
      name: "GitHub",
      value: 271,
      href: "https://github.com/tremorlabs/tremor",
    },
  ];

  const style = {
    boxShadowLittle: "3px 3px #000",
    boxShadowLarge: "8px 8px #000",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  return (
    <div className="w-full h-full relative bg-slate-900">
      <Image
        alt="Mountains"
        src="/assets/bg-img.webp"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          boxShadow: style.boxShadowLarge,
        }}
        className="relative mx-7  md:max-w-5xl md:mx-auto bg-[#FEF3C7] py-10 px-10 border-8 border-[#A66224]"
      >
        <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
          <span>Rank</span>
          <span>Team Name</span>
          <span>Points</span>
        </p>
        <BarList data={data} className="mt-2" />

      </div>
      {/* <Card className="mx-auto max-w-lg">
      </Card> */}

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
