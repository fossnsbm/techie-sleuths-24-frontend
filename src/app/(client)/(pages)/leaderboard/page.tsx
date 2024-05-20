import { BarList, Card } from "@tremor/react";

import Image from "next/image";

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
    <div className="relative h-full w-full bg-slate-900">
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
        className="relative mx-7  border-8 border-[#A66224] bg-[#FEF3C7] px-10 py-10 md:mx-auto md:max-w-5xl"
      >
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <span>Rank</span>
          <span>Team Name</span>
          <span>Points</span>
        </p>
        <BarList data={data} className="mt-2" />
      </div>
      {/* <Card className="mx-auto max-w-lg">
      </Card> */}
    </div>
  );
}
