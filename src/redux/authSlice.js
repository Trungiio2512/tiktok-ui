import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        user: null, 
        isLoggedIn: false
    },
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true
        },
        userLogout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const {userLogin, userLogout} = authSlice.actions

export default authSlice.reducer