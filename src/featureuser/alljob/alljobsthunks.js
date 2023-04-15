import customfetch from "../../utils/axios";

export const getAllJobThunks = async (_, thunkAPI) => {
  const { page, search, searchstatus, searchtype, sort } =
    thunkAPI.getState().alljobs;
  let url = `/jobs?status=${searchstatus}&jobType=${searchtype}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customfetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("there was an error ");
  }
};
export const showStatsthunk = async (_, thunkAPI) => {
  try {
    const resp = await customfetch.get("/jobs/stats", {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reducers.data.msg);
  }
};
