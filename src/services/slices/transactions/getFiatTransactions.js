import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFiatTransactions } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    fiatTransactions: [],
}

export const queryFiatTransactions = createAsyncThunk(
    'getFiatTransactions/queryFiatTransactions',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFiatTransactions(),
                null,
                params
            )
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fiatTransactionSlice = createSlice({
    name: 'getFiatTransactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFiatTransactions.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryFiatTransactions.fulfilled, (state, action) => {
                // state.loading = false;
                // state.transactions = action?.payload;
                return (state = {
                    ...state,
                    loading: false,
                    fiatTransactions: action.payload,
                })
            })
            .addCase(queryFiatTransactions.rejected, (state, { payload }) => {
                // state.loading = false;
                // state.error = payload;
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getFiatTransactionsSelector = (state) => state.fiatTransactions

// The reducer
export default fiatTransactionSlice.reducer
