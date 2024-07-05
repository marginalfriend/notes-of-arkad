import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
	isLoggedIn: boolean,
	user: string
}

const initialState = {
	isLoggedIn: false,
	user: ""
} as AuthState

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setAuthState: (state, action) => {
			const { isLoggedIn, user } = action.payload
			state.isLoggedIn = isLoggedIn
			state.user = isLoggedIn ? user : ""
		},
		logout: (state) => {
			state.user = ""
			state.isLoggedIn = false
		}
	}
})

export const { setAuthState, logout } = authSlice.actions

export default authSlice.reducer