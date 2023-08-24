import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { twoFactorAuthentication } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const query2FA = createAsyncThunk('login-2fa', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', twoFactorAuthentication(), data)
    return response.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

export const twoFaSlice = createSlice({
  name: "login-2fa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(query2FA.pending, (state) => {
        state.loading = true;
      })
      .addCase(query2FA.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(query2FA.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

// A selector
export const get2FaSelector = (state) => state.twoFA;

// The reducer
export default twoFaSlice.reducer;
