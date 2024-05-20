import Image from "next/image";

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
          The Crossword will be available when the event starts!
        </h1>
        <QuestionBox />
      </div>
    </div>
  );
}
