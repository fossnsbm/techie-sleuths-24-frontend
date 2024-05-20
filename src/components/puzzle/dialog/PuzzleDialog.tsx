import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import ClueAnswerInput from "./dialogContent/ClueAnswerInput";
import SelectClue from "./dialogContent/SelectClue";
import { closePuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { IClue } from "@/types/puzzle";

type Props = {};

interface IPuzzleDialogState {
  isOpen: boolean;
  clues: IClue[];
}

export default function PuzzleDialog(props: Props) {
  const dispatch = useDispatch();
  const dialogStatus: IPuzzleDialogState = useSelector(
    (state: RootState) => state.puzzleDialog
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
