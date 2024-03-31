import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import beerReducer from "./slices/beer.slice";

export const store = configureStore({
  reducer: {
    beer: beerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
