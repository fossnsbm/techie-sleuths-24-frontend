"use client";
import React, { useEffect } from "react";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { updatePuzzle } from "@/store/reducers/puzzle-reducer";
import Puzzle from "@/components/puzzle/Rows/Puzzle";
import { useSearchParams } from "next/navigation";
import { getCellCount } from "@/data/puzzle/ClueCellCount";
import PuzzleDialog from "@/components/puzzle/dialog/PuzzleDialog";

export default function PuzzlePage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const puzzleState: boolean = useSelector(
    (state: RootState) => state.puzzleDialog.isOpen
  );

  useEffect(() => {
    try {
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
  }, []);

  return (
    <div className="px-[3%] py-8">
      <PuzzleDialog />
      <div className="text-center">
        <Puzzle />
      </div>
    </div>
  );
}
