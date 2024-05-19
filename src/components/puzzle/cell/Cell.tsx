"use client";
import React from "react";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { IClue } from "@/types/puzzle";

type Props = {
  clues: IClue[];
  cellNumber: number;
  clueIndex?: number;
};


const Cell = (props: Props) => {
  const dispatch = useDispatch();
  const cellKey = `b${props.cellNumber}`;
  const answer: string = useSelector(
    (state: RootState) => (state.puzzle as Record<string, string>)[cellKey]
  );

  return (
    <button
      className={`bg-[#9D6532] border-4 border-l-[#B77C44] border-t-[#B77C44] border-b-[#894E2B] border-r-[#894E2B] text-3xl text-white flex items-center justify-center min-w-16 min-h-16 relative`}
      onClick={() => {
        dispatch(
          setPuzzleDialog({
            isOpen: true,
            clues: props.clues,
          })
        );
      }}
    >
      {props.clueIndex !== undefined && (
        <span className="absolute top-0 left-1 leading-none text-[#5A270B]">
          {props.clueIndex}
        </span>
      )}
      <div className="flex items-center justify-center w-5 h-5 uppercase">{props.cellNumber}</div>
    </button>
  );
};

export default Cell;
