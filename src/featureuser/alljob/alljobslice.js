import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobThunks, showStatsthunk } from "./alljobsthunks";

const initialFillerState = {
  search: "",
  searchstatus: "all",
  searchtype: "all",
  sort: "latest",
  sortoptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isloading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFillerState,
};
export const getAlljobs = createAsyncThunk(
  "alljobs/getAlljobs",
  getAllJobThunks
);
export const showstats = createAsyncThunk("alljobs/showStats", showStatsthunk);
const alljobsSlice = createSlice({
  name: "alljobs",
  initialState,
  reducers: {
    showloading: (state) => {
      state.isloading = true;
    },
    hideloading: (state) => {
      state.isloading = false;
    },
    handlechange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearfillter: (state) => {
      return { ...state, ...initialFillerState };
    },
    changepage: (state, { payload }) => {
      state.page = payload;
    },
    clearalljobsstats:(state)=>{
      return initialState
    }
  },
  extraReducers: {
    [getAlljobs.pending]: (state) => {
      state.isloading = true;
    },
    [getAlljobs.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      console.log(payload.jobs);
      state.jobs = payload.jobs;
      state.numOfPages = payload.numOfPages;
      state.totalJobs = payload.totalJobs;
    },
    [getAlljobs.pending]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
    [showstats.pending]: (state) => {
      state.isloading = true;
    },
    [showstats.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    },
    [showstats.pending]: (state, { payload }) => {
      state.isloading = false;
      toast.error(payload);
    },
  },
});
export const {
  showloading,
  hideloading,
  clearfillter,
  handlechange,
  changepage,
  clearalljobsstats
} = alljobsSlice.actions;

export default alljobsSlice.reducer;
