import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFiatMetrics } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    fiatMetrics: {},
}

export const queryFiatMetrics = createAsyncThunk(
    'fiatMetrics/queryFiatMetrics',
    async (params = null) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFiatMetrics(),
                null,
                params
            )
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fiatMetricsSlice = createSlice({
    name: 'fiatMetrics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFiatMetrics.pending, (state) => {
                state.loading = true
                // return (state = {
                //   ...state,
                //   loading: true,
                // });
            })
            .addCase(queryFiatMetrics.fulfilled, (state, action) => {
                state.loading = false
                state.fiatMetrics = action?.payload?.data
                // return (state = {
                //   ...state,
                //   loading: false,
                //   transactions: action.payload,
                // });
            })
            .addCase(queryFiatMetrics.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                // return (state = {
                //   ...state,
                //   loading: false,
                //   error: payload,
                // });
            })
    },
})

// A selector
export const getFiatMetricSelector = (state) => state.fiatMetrics

// The reducer
export default fiatMetricsSlice.reducer
