import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { closePuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { IClue } from "@/types/puzzle";

import ClueAnswerInput from "./dialogContent/ClueAnswerInput";
import SelectClue from "./dialogContent/SelectClue";

type Props = {};

interface IPuzzleDialogState {
  isOpen: boolean;
  clues: IClue[];
}

export default function PuzzleDialog(props: Props) {
  const dispatch = useDispatch();
  const dialogStatus: IPuzzleDialogState = useSelector(
    (state: RootState) => state.puzzleDialog,
  );
  return (
    <Dialog
      open={dialogStatus.isOpen}
      onOpenChange={() => dispatch(closePuzzleDialog())}
    >
      <DialogContent className="sm:max-w-[425px]">
        {dialogStatus.clues.length === 1 ? <ClueAnswerInput /> : <SelectClue />}
      </DialogContent>
    </Dialog>
  );
}
