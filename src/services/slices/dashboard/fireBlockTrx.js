import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockWalletTrx } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    fireBlockWallet: null,
}

export const queryFireBlockWalletTrx = createAsyncThunk(
    'fireBlockWallet/queryFireBlockWallet',
    async ({ params = null, currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockWalletTrx(currency),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const fireBlockWalletSlice = createSlice({
    name: 'fireBlockWallet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFireBlockWalletTrx.pending, (state) => {
                state.loading = true
            })
            .addCase(queryFireBlockWalletTrx.fulfilled, (state, action) => {
                state.loading = false
                state.fireBlockWallet = action?.payload?.data
            })
            .addCase(queryFireBlockWalletTrx.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getFireBlockWalletSelector = (state) => state.fireBlockWallet

// The reducer
export default fireBlockWalletSlice.reducer
