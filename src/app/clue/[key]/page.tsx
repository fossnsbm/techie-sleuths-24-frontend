"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Clue {
  id: number;
  clue: string;
  answer: string;
  key: string;
}

function CluePage({ params }: { params: { key: string } }) {
  const [loading, setLoading] = useState(true);

  const [cheatBanner, setCheatBanner] = useState(false);
  const [cheatBannerText, setCheatBannerText] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const key = params.key;

  function checkCheat() {
    const actkn = searchParams.get("actkn");

    if (actkn && window) {
      let currentTeamName = "Team 1"; // fetch it from the backend using session cookie
      let involvedTeamName = "Team 1"; // fetch it from the backend using actkn

      if (currentTeamName === involvedTeamName) {
        return;
      }

      setCheatBannerText(
        `Team ${currentTeamName} has cheated by looking at the clue, illegally shared by Team ${involvedTeamName}`,
      );
      setCheatBanner(true);
    } else {
      const actknsig = "some-random-string"; // fetch it from the backend by providing the team id who found the clue
      router.push(`/clue/${key}?actkn=${actknsig}`);
    }
  }

  const clues: Clue[] = [
    {
      id: 1,
      clue: "dila's pp size *some might say it is non existent*",
      answer: "extra small",
      key: "dilagotsmolppasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoijdilagotsmolppasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoij",
    },
    {
      id: 2,
      clue: "dila's favorite color",
      answer: "blue",
      key: "dilagotsmolppasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoijdilagotsmolppasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoig",
    },
  ];

  const clue = clues.find((clue) => clue.key === key);

  useEffect(() => {
    if (!clue) {
      setLoading(false);
      return;
    }

    checkCheat();
    setLoading(false);
  }, []);

  const style = {
    boxShadowLittle: "3px 3px #000000aa",
    boxShadowLarge: "8px 8px #000000aa",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  return (
    <div className='w-full min-h-screen relative'>
      <div className='absolute inset-0 bg-slate-900'>
        <Image
          alt='Mountains'
          src='/assets/bg-img.webp'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='relative z-10 min-h-[75vh] gird place-content-center w-full'>
        <div className='relative mx-7 md:max-w-3xl md:mx-auto bg-[#FEF3C7] p-10 border-8 border-[#A66224] drop-shadow-xl flex justify-center items-center flex-col text-2xl '>
          {/* deco */}
          <>
            <div
              style={{ boxShadow: style.boxShadowLittle }}
              className={`top-2 left-2 ${style.littleBoxStyle}`}
            />
            <div
              style={{ boxShadow: style.boxShadowLittle }}
              className={`bottom-2 left-2 ${style.littleBoxStyle}`}
            />
            <div
              style={{ boxShadow: style.boxShadowLittle }}
              className={`right-2 top-2 mr-2 ${style.littleBoxStyle}`}
            />
            <div
              style={{ boxShadow: style.boxShadowLittle }}
              className={`right-2 bottom-2 ${style.littleBoxStyle}`}
            />
          </>

          {loading ? (
            <>Loading...</>
          ) : (
            <>
              {cheatBanner ? (
                <label className='text-red-600 w-full text-center'>
                  {cheatBannerText}
                </label>
              ) : (
                <h1 className='text-center'>
                  {clue ? <>Clue: {clue.clue}</> : <>Clue not found</>}
                </h1>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CluePage;
