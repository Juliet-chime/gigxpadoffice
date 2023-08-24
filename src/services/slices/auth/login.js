import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { loginUser } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const queryUserLogin = createAsyncThunk('loginUser', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', loginUser(), data)
    return response
  } catch (e) {
    return rejectWithValue(e)
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
      })
      .addCase(queryUserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// A selector
export const getLoginSelector = (state) => state.login;

// The reducer
export default loginSlice.reducer;
