import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getTransactions } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  transactions: [],
};

export const queryTransactions = createAsyncThunk('getTransactions/queryTransactions', async () => {
  try {
    const response = await makeApiRequest('get', getTransactions())
    return response?.data
  } catch (e) {
    console.log(e)
  }
})

export const transactionSlice = createSlice({
  name: "getTransactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryTransactions.pending, (state) => {
        return (state = {
          ...state,
          loading: true,
        });
      })
      .addCase(queryTransactions.fulfilled, (state, action) => {
        // state.loading = false;
        // state.transactions = action?.payload;
        return (state = {
          ...state,
          loading: false,
          transactions: action.payload,
        });
      })
      .addCase(queryTransactions.rejected, (state, { payload }) => {
        // state.loading = false;
        // state.error = payload;
        return (state = {
          ...state,
          loading: false,
          error: payload,
        });
      });
  }
});

// A selector
export const getTransactionsSelector = (state) => state.transactions;

// The reducer
export default transactionSlice.reducer;
