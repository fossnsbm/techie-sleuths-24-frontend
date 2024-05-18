import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import teamDetailsReducer from "./reducers/teamDetails-reducer";

const rootReducer = combineReducers({
  teamDetails: teamDetailsReducer,
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
