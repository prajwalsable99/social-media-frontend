import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import getPostsReducer from './getPostsofFollwing/getpostsfollSlice'
const store =configureStore({

    reducer:{
        auth:authReducer,
        getposts:getPostsReducer
    }
})

export default store;