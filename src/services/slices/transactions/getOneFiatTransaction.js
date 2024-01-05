import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getOneFiatTransactions } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    oneFiatTransaction: {},
}

export const queryOneFiatTransactions = createAsyncThunk(
    'getOneFiatTransactions/queryOneFiatTransactions',
    async ({ id }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getOneFiatTransactions(id)
            )
            return response?.data
        } catch (e) { }
    }
)

export const oneFiatTransactionSlice = createSlice({
    name: 'getOneFiatTransactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryOneFiatTransactions.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryOneFiatTransactions.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    oneFiatTransaction: action.payload,
                })
            })
            .addCase(
                queryOneFiatTransactions.rejected,
                (state, { payload }) => {
                    return (state = {
                        ...state,
                        loading: false,
                        error: payload,
                    })
                }
            )
    },
})

// A selector
export const getOneFiatTransactionsSelector = (state) =>
    state.oneFiatTransaction

// The reducer
export default oneFiatTransactionSlice.reducer
