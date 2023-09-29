import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getOneCryptoTransactions } from "../../apis";

const initialState = {
    loading: false,
    error: null,
    oneCryptoTransaction: {},
};

export const queryOneCryptoTransactions = createAsyncThunk('getCryptoFiatTransactions/queryOneCryptoTransactions', async ({ id }) => {
    try {
        const response = await makeApiRequest('get', getOneCryptoTransactions(id))
        return response?.data
    } catch (e) {
        console.log(e)
    }
})

export const oneCryptoTransactionSlice = createSlice({
    name: "getOneCryptoTransactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryOneCryptoTransactions.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                });
            })
            .addCase(queryOneCryptoTransactions.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    oneCryptoTransaction: action.payload,
                });
            })
            .addCase(queryOneCryptoTransactions.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                });
            });
    }
});

// A selector
export const getOneCryptoTransactionsSelector = (state) => state.oneCryptoTransaction;

// The reducer
export default oneCryptoTransactionSlice.reducer;
