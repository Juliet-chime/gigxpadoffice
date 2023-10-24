import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getCryptoTransactions } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    cryptoTransactions: [],
}

export const queryCryptoTransactions = createAsyncThunk(
    'getCryptoTransactions/queryCryptoTransactions',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getCryptoTransactions(),
                null,
                params
            )
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const cryptoTransactionSlice = createSlice({
    name: 'getCryptoTransactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCryptoTransactions.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryCryptoTransactions.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    cryptoTransactions: action.payload,
                })
            })
            .addCase(queryCryptoTransactions.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getCryptoTransactionsSelector = (state) => state.cryptoTransactions

// The reducer
export default cryptoTransactionSlice.reducer
