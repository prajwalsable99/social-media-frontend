import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getpostsfollAction=createAsyncThunk(
    //first arg
    'post/getposts',

    //second arg 
    async (_,{rejectWithValue})=>{

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                   
                }
            }
            const {data}= await axios.get(
                '/api/v1/post/getposts',
                
                config
            )
            // console.log(data)
            return  data.posts;

        } catch (error) {

            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
            
        }

    }

    
)