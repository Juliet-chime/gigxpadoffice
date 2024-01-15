import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getCryptoChart } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    cryptoChart: null,
}

export const queryCryptoChart = createAsyncThunk(
    'getCryptoChart/queryCryptoChart',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getCryptoChart(),
            )
            return response?.data
        } catch (e) { }
    }
)

export const cryptoChartSlice = createSlice({
    name: 'getCryptoChart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryCryptoChart.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryCryptoChart.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    cryptoChart: action.payload,
                })
            })
            .addCase(queryCryptoChart.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getCryptoChartSelector = (state) => state.cryptoChart

// The reducer
export default cryptoChartSlice.reducer
