import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { loginUser } from "../../apis";

export const queryUserLogin = createAsyncThunk('loginUser/queryUserLogin', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', loginUser(), data)
    return response.data
  } catch (err) {
    console.log(err,'login ereeeee')
    return rejectWithValue(err?.response?.data)
  }
})
