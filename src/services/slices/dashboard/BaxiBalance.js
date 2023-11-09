import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getBaxiBalance } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    baxiBalance: null,
}

export const queryBaxiBalance = createAsyncThunk(
    'baxiBalance/queryBaxiBalance',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getBaxiBalance(),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const baxiBalanceSlice = createSlice({
    name: 'baxiBalance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryBaxiBalance.pending, (state) => {
                state.loading = true
            })
            .addCase(queryBaxiBalance.fulfilled, (state, action) => {
                state.loading = false
                state.baxiBalance = action?.payload?.data
            })
            .addCase(queryBaxiBalance.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getBaxiBalanceSelector = (state) => state.baxiBalance

// The reducer
export default baxiBalanceSlice.reducer
