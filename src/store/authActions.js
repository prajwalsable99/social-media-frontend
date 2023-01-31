import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserAction=createAsyncThunk(
    //first arg
    'auth/login',

    //second arg 
    async ({email,password},{rejectWithValue})=>{

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    "withCredentials" : true
                }
            }
            const {data}= await axios.post(
                '/api/v1/user/login',
                {email,password},
                config
            )
            // console.log(data)
            return  data.user;

        } catch (error) {

            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
            
        }

    }

    
)

export const isAuthAction=createAsyncThunk(
    //first arg
    'auth/isauth',

    //second arg 
    async (rejectWithValue)=>{
        // console.log("break 1")
        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                   
                }
            }
            const {data}= await axios.get(
                '/api/v1/user/myprofile',
               
                config
            )
            // console.log(data)
            return  data.profile;

        } catch (error) {

            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
            
        }

    }

    
)


export const LogoutAction=createAsyncThunk(
    //first arg
    'auth/logout',

    //second arg 
    async (_,{rejectWithValue})=>{
        
        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                   
                }
            }
            const {data}= await axios.get(
                '/api/v1/user/logout',
               
                config
            )
            // console.log(data)
            return  data

        } catch (error) {

            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
            
        }

    }

    
)