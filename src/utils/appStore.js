import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import  movieReducer  from "./movieSlice"
import GPTReducer from "./GPTSlice";
import configSlice from "./configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieReducer,
            gpt: GPTReducer,
            config: configSlice
        }
    });

export default appStore