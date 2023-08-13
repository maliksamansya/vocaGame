import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: "",
        password: "",
        cookie: ""
    }
}
export const auth = createSlice({
    name: "auth",
    initialState,
    reducer: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action) => {
            return {
                value: {
                    username: action.payload.username,
                    password: action.payload.password,
                    cookie: action.payload.cookies
                }
            }
        }
    }
})

export const { logOut, logIn } = auth.actions
export default auth.reducer