import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
// import { getFiatProfit } from "../../apis";

const initialState = {
    loading: false,
    error: null,
    fiatProfit: {},
}

export const queryFiatProfit = createAsyncThunk(
    'fiatProfit/queryFiatProfit',
    async (params = null) => {
        try {
            const response = await makeApiRequest('get', 'sd', null, params)
            return response?.data
        } catch (e) {}
    }
)

export const fiatProfitSlice = createSlice({
    name: 'fiatProfit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFiatProfit.pending, (state) => {
                state.loading = true
            })
            .addCase(queryFiatProfit.fulfilled, (state, action) => {
                state.loading = false
                state.fiatProfit = action?.payload
            })
            .addCase(queryFiatProfit.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getFiatProfitSelector = (state) => state.fiatProfit

// The reducer
export default fiatProfitSlice.reducer
