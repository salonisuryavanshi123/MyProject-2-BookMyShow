import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userInfo:{
        fname:"Saloni"
    },
    token:null,

    loading:null,
    success:null,
    error:null,
}


export const authSlice = createSlice({
    name:'auth',
    initialState,
    resucers:{},
    extraReducers:{}
});

export let selectUserInfo = (state)=> state.auth;

export default authSlice.reducer;