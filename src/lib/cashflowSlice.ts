import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TableData } from "./custom-types"

export interface TableDataState {
	cashflow: TableData[]
}

export type EditCashflowPayload = {
	id: string,
	updatedData: TableData,
}

export const cashflowSlice = createSlice({
	name: "cashflow",
	initialState: {
		cashflow: []
	} as TableDataState,
	reducers: {

		addCashflow: (state, action: PayloadAction<TableData>) => {
			state.cashflow.push(action.payload)
		},

		editCashflow: (state, action: PayloadAction<EditCashflowPayload>) => {
			const { id, updatedData } = action.payload;
			const index = state.cashflow.findIndex(form => form.id === id);
			if (index !== -1) {
				state.cashflow[index] = { ...state.cashflow[index], ...updatedData }
			}
		},

		deleteCashflow: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			state.cashflow = state.cashflow.filter((form) => form.id !== id);
		},

	}
})

export const { addCashflow, editCashflow, deleteCashflow } = cashflowSlice.actions;

const cashflowReducer = cashflowSlice.reducer;
export default cashflowReducer;