import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
	isLoggedIn: boolean,
	user: { name: null, }
}

const initialState = {
	isLoggedIn: false,
	user: { name: null }
} as AuthState

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setAuthState: (state, action) => {
			const { isLoggedIn, user } = action.payload
			state.isLoggedIn = isLoggedIn
			state.user = isLoggedIn ? user : null
		},
		logout: (state) => {
			state.user = { name: null }
			state.isLoggedIn = false
		}
	}
})

export const { setAuthState, logout } = authSlice.actions

export default authSlice.reducer