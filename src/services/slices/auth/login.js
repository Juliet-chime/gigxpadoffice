import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { loginUser } from "../../apis";
import { setAuth } from "../../../utils/authFunc";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const queryUserLogin = createAsyncThunk('loginUser', async (data) => {
  try {
    const response = await makeApiRequest('post', loginUser(), data)
    return response.data
  } catch (e) {
    console.log(e)
  }
})

export const loginSlice = createSlice({
  name: "login",
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
        setAuth('token', payload?.accessToken)
      })
      .addCase(queryUserLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

// A selector
export const getLoginSelector = (state) => state.login;

// The reducer
export default loginSlice.reducer;
