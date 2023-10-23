import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getBillTransactions } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    billTransactions: [],
}

export const queryBillTransactions = createAsyncThunk(
    'getBillTransactions/queryBillTransactions',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getBillTransactions(),
                null,
                params
            )
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const billTransactionSlice = createSlice({
    name: 'getBillTransactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryBillTransactions.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryBillTransactions.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    billTransactions: action.payload?.data,
                })
            })
            .addCase(queryBillTransactions.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getBillTransactionsSelector = (state) => state.billTransactions

// The reducer
export default billTransactionSlice.reducer
