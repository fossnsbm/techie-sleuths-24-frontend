"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";

import { IClue } from "@/types/puzzle";

type Props = {
  clues: IClue[];
  cellNumber: number;
  clueIndex?: number;
};

export default function Cell(props: Props) {
  const dispatch = useDispatch();
  const cellKey = `b${props.cellNumber}`;
  const answer: string = useSelector(
    (state: RootState) => (state.puzzle as Record<string, string>)[cellKey],
  );

  return (
    <button
      className={`relative flex min-h-16 min-w-16 items-center justify-center border-4 border-b-[#894E2B] border-l-[#B77C44] border-r-[#894E2B] border-t-[#B77C44] bg-[#9D6532] text-3xl text-white`}
      onClick={() => {
        dispatch(
          setPuzzleDialog({
            isOpen: true,
            clues: props.clues,
          }),
        );
      }}
    >
      {props.clueIndex !== undefined && (
        <span className="absolute left-1 top-0 leading-none text-[#5A270B]">
          {props.clueIndex}
        </span>
      )}
      <div className="flex h-5 w-5 items-center justify-center uppercase">
        {answer}
      </div>
    </button>
  );
}
