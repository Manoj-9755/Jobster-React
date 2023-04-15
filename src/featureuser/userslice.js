import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getitemfromlocal,
  addusertolocal,
  removeuserfromlocal,
} from "../utils/localstorage";
import { loginUserThunk, registerUserThunk, updateuserthunk,clearStoreThunk } from "./userthunk";


export const registeruser = createAsyncThunk(
  "user/registeruser",
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/Register',user,thunkAPI)
  }
);

export const loginuser = createAsyncThunk(
  "user/loginuser",
  async (user, thunkAPI) => {
  return loginUserThunk("/auth/login",user,thunkAPI)
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
   return updateuserthunk('/auth/updateUser',user,thunkAPI)
  }
);
export const clearStore=createAsyncThunk('user/clearStore',clearStoreThunk)

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isloading: false,
    issidebar: false,
    user: getitemfromlocal()},
  reducers: {
    togglesidebar: (state) => {
      state.issidebar = !state.issidebar;
    },
    logoutuser: (state,{payload}) => {
      state.user = null;
      state.issidebar = false;
      removeuserfromlocal();
      if(payload){
        toast.success(payload)
      }
    },
  },
  extraReducers: {
    [registeruser.pending]: (state) => {
      state.isloading = true;
    },
    [registeruser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isloading = false;
      state.user = user;
      toast.success(`hello there ${user.name}`);
      addusertolocal(user);
    },
    [registeruser.pending]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
    [loginuser.pending]: (state) => {
      state.isloading = true;
    },
    [loginuser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isloading = false;
      state.user = user;
      toast.success(`welcome back ${user.name}`);
      addusertolocal(user);
    },
    [loginuser.pending]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isloading = true;
      console.log('anana')
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isloading = false;
      console.log(user)
      state.user = user;
      console.log(user)
      addusertolocal(user);
      toast.success(`user updated `);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
    [clearStore.rejected]:()=>{
      toast.error('there was an error')
    }
  },
});
console.log(counterSlice.reducer);
export const { togglesidebar, logoutuser } = counterSlice.actions;
export default counterSlice.reducer;
