import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { setPassword } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  message: {},
};

export const querySetPassword = createAsyncThunk('setPassword', async (data,{rejectWithValue}) => {
  try {
    const response = await makeApiRequest('post', setPassword(), data)
    return response
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const setPasswordSlice = createSlice({
  name: "setpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(querySetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(querySetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload;
      })
      .addCase(querySetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

// A selector
export const getSetPasswordSelector = (state) => state.setPassword;

// The reducer
export default setPasswordSlice.reducer;
