import { toast } from "react-toastify";
import customfetch from "../utils/axios";
import { logoutuser } from "./userslice";
import { clearalljobsstats } from "./alljob/alljobslice";
import { clearvalues } from "./job/jobslice";



export const registerUserThunk=async(url,user,thunkAPI)=>{
    try {
        const res = await customfetch.post(url, user);
        console.log(res.data)
        return res.data;
      } catch (error) {
        toast.error(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
}
export const loginUserThunk=async(url,user,thunkAPI)=>{
    try {
        const res = await customfetch.post(url, user);
        console.log(res.data)
        return res.data;
      } catch (error) {
        toast.error(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
}
export const updateuserthunk=async(url,user,thunkAPI)=>{
    console.log(thunkAPI.getState().user.user.token)
    try {
        const res = await customfetch.patch(url, user, {
            headers:{
                authorization:`Bearer ${thunkAPI.getState().user.user.token}`
            }
        });
        console.log(res.data);
        return res.data;
      } catch (error) {
        if(error.response.status===401){
          thunkAPI.dispatch(logoutuser())
          return thunkAPI.rejectWithValue('unauthorized logging out')
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
}
export const clearStoreThunk=async(message,thunkAPI)=>{
  try {
     thunkAPI.dispatch(logoutuser(message))
     thunkAPI.dispatch(clearalljobsstats())
     thunkAPI.dispatch(clearvalues())
     return Promise.resolve;
  } catch (error) {
    return Promise.reject()
  }
}