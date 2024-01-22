import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getCurrencies } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    currencies: null,
}

export const queryCurrencies = createAsyncThunk(
    'currencies/queryCurrencies',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getCurrencies(),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCurrencies.pending, (state) => {
                state.loading = true
            })
            .addCase(queryCurrencies.fulfilled, (state, action) => {
                state.loading = false
                state.currencies = action?.payload
            })
            .addCase(queryCurrencies.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getCurrenciesSelector = (state) => state.currency

// The reducer
export default currenciesSlice.reducer
