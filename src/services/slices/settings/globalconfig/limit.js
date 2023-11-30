import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import { updateLimit } from '../../../apis'

const initialState = {
    loading: false,
    error: null,
    limit: null,
}

export const queryLimit = createAsyncThunk('limit/querylimit', async () => {
    try {
        const response = await makeApiRequest('get', updateLimit())
        return response?.data
    } catch (e) {}
})

export const limitSlice = createSlice({
    name: 'limit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryLimit.pending, (state) => {
                state.loading = true
            })
            .addCase(queryLimit.fulfilled, (state, action) => {
                state.loading = false
                state.limit = action?.payload?.data
            })
            .addCase(queryLimit.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getLimitSelector = (state) => state.limit

// The reducer
export default limitSlice.reducer
