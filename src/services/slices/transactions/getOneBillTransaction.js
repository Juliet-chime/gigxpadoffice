import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getOneBillTransactions } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  oneBillTransaction: {},
};

export const queryOneBillTransactions = createAsyncThunk('getOneBillTransactions/queryOneBillTransactions', async ({id}) => {
  try {
    const response = await makeApiRequest('get', getOneBillTransactions(id))
    return response?.data
  } catch (e) {
    console.log(e)
  }
})

export const oneBillTransactionSlice = createSlice({
  name: "getOneBillTransactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryOneBillTransactions.pending, (state) => {
        return (state = {
          ...state,
          loading: true,
        });
      })
      .addCase(queryOneBillTransactions.fulfilled, (state, action) => {
        return (state = {
          ...state,
          loading: false,
          oneBillTransaction: action.payload,
        });
      })
      .addCase(queryOneBillTransactions.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          loading: false,
          error: payload,
        });
      });
  }
});

// A selector
export const getOneBillTransactionsSelector = (state) => state.oneBillTransaction;

// The reducer
export default oneBillTransactionSlice.reducer;
