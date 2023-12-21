import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getStellaorBaxiLedger } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const queryStellaBaxiLedger = createAsyncThunk(
    'stellaBaxiLedger/queryStellaBaxiLedger',
    async ({ name, params }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getStellaorBaxiLedger(name),
                null,
                params
            )
            return response?.data
        } catch (e) { }
    }
)

export const stellaBaxiLedgerSlice = createSlice({
    name: 'stellaBaxiLedger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryStellaBaxiLedger.pending, (state) => {
                state.loading = true
            })
            .addCase(queryStellaBaxiLedger.fulfilled, (state, action) => {
                state.loading = false
                state.data = action?.payload?.data
            })
            .addCase(queryStellaBaxiLedger.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getStellaBaxiLedgerSelector = (state) => state.stellaBaxi

// The reducer
export default stellaBaxiLedgerSlice.reducer
