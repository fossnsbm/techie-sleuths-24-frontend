"use client";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePuzzle } from "@/store/reducers/puzzle-reducer";
import Puzzle from "@/components/puzzle/Rows/Puzzle";
import { useRouter } from "next/navigation";
import PuzzleDialog from "@/components/puzzle/dialog/PuzzleDialog";
import { getCrosswordDetails } from "@/api/puzzle/puzzleApi";
import { useToast } from "@/components/ui/use-toast";

export default function PuzzlePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCrosswordDetails();
        if (res?.status === 401) {
          router.push("/login");
        }
        if (res?.status === 200) {
          dispatch(updatePuzzle(res?.data?.crossword.boxes));
        } else {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: res?.data.message,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-[3%] py-8 bg-sky-200">
      <PuzzleDialog />
      <div className="text-center">
        <Suspense>
          <Puzzle />
        </Suspense>
      </div>
    </div>
  );
}
