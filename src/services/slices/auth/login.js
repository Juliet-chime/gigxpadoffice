import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { loginUser } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const queryUserLogin = createAsyncThunk('loginUser/queryUserLogin', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', loginUser(), data)
    return response?.data
  } catch (err) {
    console.log(err)
    // return err
     return rejectWithValue(err.data)
  }
})

export const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryUserLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(queryUserLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(queryUserLogin.rejected, (state, { payload }) => {
        console.log(payload,'login error payload')
        state.loading = false;
        state.error = payload;
      });
  }
});

// A selector
export const getLoginSelector = (state) => state?.login;

// The reducer
export default loginSlice.reducer;