import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getFiatRevenue } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  fiatRevenue: {},
};

export const queryFiatRevenue = createAsyncThunk('fiatRevenue/queryFiatRevenue', async (params = null) => {
  try {
    const response = await makeApiRequest('get', getFiatRevenue(), null, params)
    return response?.data
  } catch (e) {
    console.log(e)
  }
})

export const fiatRevenueSlice = createSlice({
  name: "fiatRevenue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryFiatRevenue.pending, (state) => {
        state.loading = true;
      })
      .addCase(queryFiatRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.fiatRevenue = action?.payload;
      })
      .addCase(queryFiatRevenue.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

// A selector
export const getFiatRevenueSelector = (state) => state.fiatRevenue;

// The reducer
export default fiatRevenueSlice.reducer;
