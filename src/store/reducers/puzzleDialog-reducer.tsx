import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClue } from "@/types/puzzle";

interface IPuzzleDialogState {
  isOpen: boolean;
  clues: IClue[];
}

const initialState: IPuzzleDialogState = {
  isOpen: false,
  clues: [],
};

const puzzleDialogStateSlice = createSlice({
  name: "puzzleDialogState",
  initialState,
  reducers: {
    setPuzzleDialog(state, action: PayloadAction<IPuzzleDialogState>) {
      state.isOpen = action.payload.isOpen;
      state.clues = action.payload.clues;
    },
    closePuzzleDialog(state) {
      state.isOpen = false;
      state.clues = [];
    },
  },
});

export const { setPuzzleDialog, closePuzzleDialog } =
  puzzleDialogStateSlice.actions;
export default puzzleDialogStateSlice.reducer;
