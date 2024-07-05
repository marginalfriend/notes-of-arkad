import { configureStore } from "@reduxjs/toolkit";
import cashflowReducer from "./cashflowSlice";

// React Redux: Store Set Up
export const store = configureStore({
	reducer: {
		cashflow: cashflowReducer
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch