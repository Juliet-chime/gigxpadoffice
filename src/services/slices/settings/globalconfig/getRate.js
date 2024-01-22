import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRate } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

const initialState = {
    loading: false,
    error: null,
    rates: null,
}

export const queryRates = createAsyncThunk(
    'rates/queryRates',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getRate(),
                null,
                params
            )
            return response?.data
        } catch (e) { }
    }
)

export const ratesSlice = createSlice({
    name: 'rates',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryRates.pending, (state) => {
                state.loading = true
            })
            .addCase(queryRates.fulfilled, (state, action) => {
                state.loading = false
                state.rates = action?.payload?.data
            })
            .addCase(queryRates.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getRatesSelector = (state) => state.rates

// The reducer
export default ratesSlice.reducer
