import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFees } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

const initialState = {
    loading: false,
    error: null,
    fees: null,
}

export const queryFees = createAsyncThunk(
    'fees/queryFees',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFees(),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const feesSlice = createSlice({
    name: 'fees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFees.pending, (state) => {
                state.loading = true
            })
            .addCase(queryFees.fulfilled, (state, action) => {
                state.loading = false
                state.fees = action?.payload?.data
            })
            .addCase(queryFees.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getFeesSelector = (state) => state.fees

// The reducer
export default feesSlice.reducer
