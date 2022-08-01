import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import { setMessage } from "./message";
const ISSERVER = typeof window === "undefined";

const user =!ISSERVER? JSON.parse(localStorage.getItem("user")):null;
export const register=createAsyncThunk("account/register",
async({firstname,lastname,email,password,confirmPassword},thunkAPI)=>{
    console.log(firstname)
    try {
        const response=await AuthService.register(firstname,lastname,email,password,confirmPassword);
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;

    } catch (error) {
        console.log(error);
        thunkAPI.dispatch(setMessage(error.message));
        return thunkAPI.rejectWithValue();
    }
})

export const login=createAsyncThunk("auth/login",
async({email,password},thunkAPI)=>{
    try {
        const response=await AuthService.login(email,password);
        thunkAPI.dispatch(setMessage(response.data.message));
        return {user:response};

    } catch (error) {
        console.log(error);
        thunkAPI.dispatch(setMessage(error.message));
        return thunkAPI.rejectWithValue();
    }
})

export const logout=(createAsyncThunk("auth/logout",async()=>{
    await AuthService.logout();
}
))

const initialState=user ? {isLoggedIn:true,user}:{isLoggedIn:false,user:null}
console.log(initialState)
const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [register.fulfilled]:(state,action)=>{
            state.isLoggedIn=false
        },
        [register.rejected]:(state,action)=>{
            state.isLoggedIn=false
        },
        [login.fulfilled]:(state,action)=>{
            state.isLoggedIn=true;
            state.user=action.payload.data;
        },
        [login.rejected]:(state,action)=>{
            state.isLoggedIn=false;
            state.user=null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
          },
    }
})

const {reducer} = authSlice;
export default reducer;