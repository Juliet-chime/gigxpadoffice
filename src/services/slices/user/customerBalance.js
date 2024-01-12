import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCustomerBalance } from '../../apis'
import { makeApiRequest } from '../../baseApi'

const initialState = {
    loading: false,
    error: null,
    customerBalance: [],
}

export const queryCustomerBalance = createAsyncThunk(
    'getCustomerBalance/queryCustomerBalance',
    async ({ id }) => {
        try {
            const response = await makeApiRequest('get', getCustomerBalance(id))
            return response?.data
        } catch (e) { }
    }
)

export const customerBalanceSlice = createSlice({
    name: 'customerBalance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCustomerBalance.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryCustomerBalance.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    customerBalance: action.payload,
                })
            })
            .addCase(queryCustomerBalance.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getCustomerBalanceSelector = (state) => state.customerBalance

// The reducer
export default customerBalanceSlice.reducer
