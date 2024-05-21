"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { getClue } from "@/api/clue/getClue";
import { markClue } from "@/api/clue/markClue";
import { deductScore } from "@/api/score/deductScore";

import { Button } from "@/components/ui/button";

interface Clue {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  clue_id: string;
  clue_hint: string;
  clue_points: number;
  clue_box_number: number;
  clue_box_direction: string;
}

function CluePage({ params }: { params: { key: string } }) {
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [clue, setClue] = useState<Clue | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const key = params.key;

  function checkCheat() {
    const actkn = searchParams.get("actkn");
    const localTeamEmail = window.localStorage.getItem("email");
    const auth = window.localStorage.getItem("auth");

    if (!localTeamEmail || !auth) {
      setMessageText("Please login first...");
      setMessage(true);

      setTimeout(() => {
        router.push("/login");
      }, 3000);
      return;
    }

    if (actkn && window) {
      const fingerprintedTeam = atob(actkn);

      if (localTeamEmail === fingerprintedTeam) {
        return;
      }

      setMessageText(
        `You have been caught cheating! Talk to one of the officials to get unbanned and continue playing... points were deducted from both teams scores as a penatly!`,
      );
      setMessage(true);

      deductScore(localTeamEmail, fingerprintedTeam, 5).catch((error) => {
        console.error(error);
      });
    } else {
      const actknsig = btoa(localTeamEmail);

      router.push(`/clue/${key}?actkn=${actknsig}`);

      markClue(key, localTeamEmail).catch((error) => {
        console.error(error);
      });
    }
  }

  useEffect(() => {
    getClue(key)
      .catch((error) => {
        setMessageText("Clue not found! Redirecting to the home page...");
        console.error(error);
        setMessage(true);

        setTimeout(() => {
          router.push("/");
        }, 3000);
      })
      .then((data) => {
        if (data) {
          setClue(data.clue);
        } else {
          return;
        }
        try {
          checkCheat();
        } catch (error) {
          console.error(error);
          setMessageText(
            "An unknown error occurred check your connection and try reloading the page...",
          );
          setMessage(true);
        }
        setLoading(false);
      });
  }, []);

  const style = {
    boxShadowLittle: "3px 3px #000000aa",
    boxShadowLarge: "8px 8px #000000aa",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-slate-900">
        <Image
          alt="Mountains"
          src="/assets/bg-img.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="gird relative z-10 min-h-[75vh] w-full place-content-center">
        <div className="relative  mx-7 flex flex-col items-center justify-center border-8 border-[#A66224] bg-[#FEF3C7] p-10 text-2xl drop-shadow-xl md:mx-auto md:max-w-3xl ">
          {/* deco */}
          <>
            <div
              style={{ boxShadow: style.boxShadowLittle }}
              className={`left-2 top-2 ${style.littleBoxStyle}`}
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
              className={`bottom-2 right-2 ${style.littleBoxStyle}`}
            />
          </>

          {loading ? (
            <>Loading...</>
          ) : (
            <>
              {message ? (
                <label className="w-full text-center text-red-600">
                  {messageText}
                </label>
              ) : (
                <>
                  <h1 className="text-center">
                    {clue ? (
                      <>
                        {clue.clue_box_number}{" "}
                        {clue.clue_box_direction == "a" ? "across" : "down"} :{" "}
                        {clue.clue_hint}
                      </>
                    ) : (
                      <>Clue not found</>
                    )}
                  </h1>

                  {clue && (
                    <Button
                      onClick={() => {
                        router.push(
                          `/play?number=${clue.clue_box_number}&direction=${clue.clue_box_direction}`,
                        );
                      }}
                    >
                      Fill Puzzel
                    </Button>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CluePage;
