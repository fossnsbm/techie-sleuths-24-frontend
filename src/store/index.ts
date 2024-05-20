import { setupListeners } from "@reduxjs/toolkit/query/react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import teamDetailsReducer from "./reducers/teamDetails-reducer";
import puzzleReducer from "./reducers/puzzle-reducer";
import puzzleDialogReducer from "./reducers/puzzleDialog-reducer";

const rootReducer = combineReducers({
  teamDetails: teamDetailsReducer,
  puzzle: puzzleReducer,
  puzzleDialog: puzzleDialogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
