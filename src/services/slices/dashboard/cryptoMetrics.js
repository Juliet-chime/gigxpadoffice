import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getCryptoMetrics } from "../../apis";

const initialState = {
    loading: false,
    error: null,
    cryptoMetrics: {},
};

export const queryCryptoMetrics = createAsyncThunk('cryptoMetrics/queryCryptoMetrics', async () => {
    try {
        const response = await makeApiRequest('get', getCryptoMetrics())
        return response?.data
    } catch (e) {
        console.log(e)
    }
})

export const cryptoMetricsSlice = createSlice({
    name: "cryptoMetrics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCryptoMetrics.pending, (state) => {
                state.loading = true;
            })
            .addCase(queryCryptoMetrics.fulfilled, (state, action) => {
                state.loading = false;
                state.cryptoMetrics = action?.payload;
            })
            .addCase(queryCryptoMetrics.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    }
});

// A selector
export const getCryptoMetricsSelector = (state) => state.cryptoMetrics;

// The reducer
export default cryptoMetricsSlice.reducer;
