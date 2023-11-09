import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getStellasBalance } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    stellasBalance: null,
}

export const queryStellasBalance = createAsyncThunk(
    'stellasBalance/queryStellasBalance',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getStellasBalance(),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const stellasBalanceSlice = createSlice({
    name: 'stellasBalance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryStellasBalance.pending, (state) => {
                state.loading = true
            })
            .addCase(queryStellasBalance.fulfilled, (state, action) => {
                state.loading = false
                state.stellaBalance = action?.payload?.data
            })
            .addCase(queryStellasBalance.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getStellasBalanceSelector = (state) => state.stellasBalance

// The reducer
export default stellasBalanceSlice.reducer
