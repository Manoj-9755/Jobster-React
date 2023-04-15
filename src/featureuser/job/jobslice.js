import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customfetch from "../../utils/axios";
import { getitemfromlocal } from "../../utils/localstorage";
import { showloading, hideloading, getAlljobs } from "../alljob/alljobslice";
import { createjobthunk, deletejobthunk, editjobthunk } from "./jobthunk";


const initialState = {
  isloading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobtypeOptions: ["full time", "part-time", "remote", "internship"],
  jobType: "full time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isediting: false,
  editJobid: "",
};
export const createjob = createAsyncThunk(
  "job/createjob",createjobthunk
  
);
export const deletejob=createAsyncThunk(
  'job/deletejob',deletejobthunk
    
)
export const editjob=createAsyncThunk(
  'job/editjobid',editjobthunk
)
const jobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    handlechang: (state, { payload: { name, value } }) => {
      state[name] = value;
      console.log(state);
    },
    clearvalues: () => {
      return {
        ...initialState,
        joblocation: getitemfromlocal()?.location || "",
      };
    },
    seteditjob:(state,{payload})=>{
      return{...state,isediting:true,...payload}
    }
  },
  extraReducers: {
    [createjob.pending]: (state) => {
      state.isloading = true;
    },
    [createjob.fulfilled]: (state) => {
      state.isloading = false;
      toast.success("job create");
    },
    [createjob.rejected]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
    [deletejob.fulfilled]: (state, { payload }) => {
      toast.success(payload);
    },
    [deletejob.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [editjob.pending]: (state) => {
      state.isloading = true;
    },
    [editjob.fulfilled]: (state) => {
      state.isloading = false;
      toast.success("job modified");
    },
    [editjob.rejected]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload)
  },
}
});
export const { handlechang, clearvalues,seteditjob } = jobSlice.actions;
export default jobSlice.reducer;
