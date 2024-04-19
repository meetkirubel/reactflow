
import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./future/node/nodesSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";



export const store = configureStore({
  reducer: {
    Nodes: nodesReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useSelectorApp:TypedUseSelectorHook<RootState> = useSelector
