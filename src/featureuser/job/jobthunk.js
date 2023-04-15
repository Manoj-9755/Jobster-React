import customfetch from "../../utils/axios";
import { getAlljobs, hideloading, showloading } from "../alljob/alljobslice";
import { logoutuser } from "../userslice";
import { clearvalues } from "./jobslice";


export const createjobthunk=async (job, thunkAPI) => {
    try {
      const resp = await customfetch.post("/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearvalues());
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutuser());
        return thunkAPI.rejectWithValue("unauthorized logging out");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }



export const deletejobthunk=async(jobId,thunkAPI)=>{
    thunkAPI.dispatch(showloading())
    console.log(jobId)
    try{
      const resp=await customfetch.delete(`/jobs/${jobId}`,{
        headers:{
          authorization:`Bearer ${thunkAPI.getState().user.user.token}`
        }
      })
      thunkAPI.dispatch(getAlljobs())
      return resp.data.msg
      
    }
    catch(error){
    thunkAPI.dispatch(hideloading())
    return thunkAPI.rejectWithValue(error.response.data.msg)
    }
    
  }
export const editjobthunk=async({jobId,job},thunkAPI)=>{
    try{
      const resp=await customfetch.patch(`/jobs/${jobId}`,job,{
        headers:{
          authorization:`Bearer ${thunkAPI.getState().user.user.token}`
        }
      })
      thunkAPI.dispatch(clearvalues())
      console.log(resp.data)
      return resp.data

    }
    catch(error){
      return thunkAPI.rejectWithValue(error.response.data.msg)

    }
  }