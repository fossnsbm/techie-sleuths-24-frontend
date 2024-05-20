import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";

import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { IClue } from "@/types/puzzle";

type Props = {};

const SelectClue = (props: Props) => {
  const dispatch = useDispatch();
  const currentClues: IClue[] = useSelector(
    (state: RootState) => state.puzzleDialog.clues,
  );
  const handleButtonClick = (clue: IClue) => {
    dispatch(setPuzzleDialog({ isOpen: true, clues: [clue] }));
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Select a clue</DialogTitle>
        <DialogDescription className="text-center text-xl">
          Please select one of these clues to fill.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {currentClues.map((clue) => (
          <Button
            key={clue.clueNumber}
            type="button"
            onClick={() => {
              handleButtonClick(clue);
            }}
          >
            {clue.clueNumber}&nbsp;
            {clue.clueDirection === "d" ? "Down" : "Across"}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SelectClue;
