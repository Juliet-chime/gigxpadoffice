import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockSaving } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    fireblockTrxSaving: null,
}

export const queryFireBlockSaving = createAsyncThunk(
    'fireblocksaving/queryFireBlockSaving',
    async ({ currency, params }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockSaving(currency),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const fireblockTrxSavingSlice = createSlice({
    name: 'fireblockTrxSaving',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFireBlockSaving.pending, (state) => {
                state.loading = true
            })
            .addCase(queryFireBlockSaving.fulfilled, (state, action) => {
                state.loading = false
                state.fireblockTrxSaving = action?.payload?.data
            })
            .addCase(queryFireBlockSaving.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getFireblockTrxSavingSelector = (state) => state.fireblockTrxSaving

// The reducer
export default fireblockTrxSavingSlice.reducer
