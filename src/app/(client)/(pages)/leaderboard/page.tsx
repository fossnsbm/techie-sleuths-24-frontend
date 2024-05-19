import Image from "next/image";
import QuestionBox from "./_components/question-box";
import { BarList } from "@tremor/react";

export default function Page() {
  const datahero = [
    { name: "/home", value: 456 },
    { name: "/imprint", value: 351 },
    { name: "/cancellation", value: 51 },
  ];
  return (
    <div className="w-full h-full relative bg-slate-900">
      <Image
        alt="Mountains"
        src="/assets/bg-img.webp"
        layout="fill"
        objectFit="cover"
      />
      <BarList data={datahero} className="mx-auto max-w-sm" />
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
