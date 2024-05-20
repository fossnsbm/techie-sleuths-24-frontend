"use client";
import React, { useEffect } from "react";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { updatePuzzle } from "@/store/reducers/puzzle-reducer";
import Puzzle from "@/components/puzzle/Rows/Puzzle";
import { useRouter, useSearchParams } from "next/navigation";
import { getCellCount } from "@/data/puzzle/ClueCellCount";
import PuzzleDialog from "@/components/puzzle/dialog/PuzzleDialog";
import { getCrosswordDetails } from "@/api/puzzle/puzzleApi";
import { useToast } from "@/components/ui/use-toast";

export default function PuzzlePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const puzzleState: boolean = useSelector(
    (state: RootState) => state.puzzleDialog.isOpen
  );
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCrosswordDetails();
        if (res?.status === 401) {
          router.push("/login");
        }
        if (res?.status === 200) {
          console.log(res.data.crossword.boxes);
          dispatch(updatePuzzle(res.data.boxes));
        } else {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: res?.data.message,
          });
        }

        let direction = searchParams.get("direction");
        direction = direction === "d" || direction === "a" ? direction : null;
        const number = parseInt(searchParams.get("number") || "", 10);
        if (direction && number && !puzzleState) {
          const cellCount = getCellCount(number, direction as "d" | "a");
          if (cellCount !== 0) {
            dispatch(
              setPuzzleDialog({
                isOpen: true,
                clues: [
                  {
                    clueNumber: number,
                    clueDirection: direction as "d" | "a",
                  },
                ],
              })
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-[3%] py-8 bg-gradient-to-b sky-200">
      <PuzzleDialog />
      <div className="text-center">
        <Puzzle />
      </div>
    </div>
  );
}
