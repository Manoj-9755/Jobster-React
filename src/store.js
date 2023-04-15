import { configureStore } from "@reduxjs/toolkit";
import { Logo } from "./components";
import counterSlice from "./featureuser/userslice";
import jobSlice from "./featureuser/job/jobslice";
import alljobslice from "./featureuser/alljob/alljobslice";


export const store=configureStore({
   reducer:{
    user:counterSlice,
    job:jobSlice,
    alljobs:alljobslice
   }
})
