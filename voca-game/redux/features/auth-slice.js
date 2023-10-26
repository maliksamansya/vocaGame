import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: "",
        password: "",
        phoneNumber: "",
        cookie: ""
    }
}
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        register: (state, action) => {
            console.log(action)
            return {
                value: {
                    ...state,
                    username: action.payload.username,
                    password: action.payload.password,
                    phoneNumber: action.payload.phoneNumber
                }
            }
        },
        test() {
            console.log("TESTTTTTTTT")
        }
    }
})

export const { logOut, register, test } = auth.actions
// export const authActions = auth.actions
export default auth.reducer