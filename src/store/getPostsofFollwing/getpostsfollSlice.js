import { createSlice } from "@reduxjs/toolkit";
import { getpostsfollAction } from "./getpostoffollActions";
const initialState= {
    loading:false,
    posts:[],
    error:null,
    success:false
}
const getpostsfollSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

        //pending
        .addCase(getpostsfollAction.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        //fulfilled
        .addCase( getpostsfollAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.posts=action.payload;

        })

        //rejected
        .addCase(getpostsfollAction.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        )


        







    },
})

export default getpostsfollSlice.reducer