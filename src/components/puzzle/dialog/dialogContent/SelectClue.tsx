import React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IClue } from "@/types/puzzle";
import { useSelector, useDispatch } from "react-redux";
import { setPuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { RootState } from "@/store";

type Props = {};

const SelectClue = (props: Props) => {
  const dispatch = useDispatch();
  const currentClues: IClue[] = useSelector(
    (state: RootState) => state.puzzleDialog.clues
  );
  const handleButtonClick = (clue: IClue) => {
    dispatch(setPuzzleDialog({ isOpen: true, clues: [clue] }));
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Select a clue</DialogTitle>
        <DialogDescription className="text-xl text-center">
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
