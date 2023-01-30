import { createSlice } from "@reduxjs/toolkit";
import { isAuthAction, loginUserAction, LogoutAction } from "./authActions";
const initialState= {
    loading:false,
    user:{},
    error:null,
    isAuth:false
}
const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

        //pending
        .addCase(loginUserAction.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        //fulfilled
        .addCase( loginUserAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.isAuth=true;
            state.user=action.payload;

        })

        //rejected
        .addCase(loginUserAction.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        )


        //loading
        .addCase(isAuthAction.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        //fulfilled
        .addCase(
        isAuthAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.isAuth=true;
            state.user=action.payload;

        })
        
        //rejected
        .addCase(
        isAuthAction.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        
        )

         //loading
         .addCase(LogoutAction.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        
        //fulfilled
        .addCase(
        LogoutAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.isAuth=false;
            state.user={};

        })
        
        //rejected
        .addCase(
        LogoutAction.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        
        )







    },
})

export default authSlice.reducer