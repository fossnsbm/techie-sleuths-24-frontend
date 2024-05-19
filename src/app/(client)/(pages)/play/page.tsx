"use client";
import React from "react";
import Puzzle from "@/components/puzzle/Rows/Puzzle";
import { useSearchParams } from "next/navigation";
import { getCellCount } from "@/components/puzzle/data/ClueCellCount";
import PuzzleDialog from "@/components/puzzle/dialog/PuzzleDialog";

type Props = {};

export default function PuzzlePage(props: Props) {
  const searchParams = useSearchParams();
  try {
    let direction = searchParams.get("direction");
    direction = direction === "d" || direction === "a" ? direction : null;
    const number = parseInt(searchParams.get("number") || "", 10);
    if (direction && number) {
      const cellCount = getCellCount(number, direction as "d" | "a");
      if (cellCount !== 0) {
        console.log(cellCount);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="px-[5%] py-8">
      <PuzzleDialog />
      <div className="text-center">
        <Puzzle />
      </div>
    </div>
  );
}
