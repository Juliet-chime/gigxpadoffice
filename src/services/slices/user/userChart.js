import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getUserMetrics } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    userChart: {},
}

export const queryUserChart = createAsyncThunk(
    'getUserChart/queryUserChart',
    async () => {
        try {
            const response = await makeApiRequest('get', getUserMetrics())
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const userChartSlice = createSlice({
    name: 'userchart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryUserChart.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryUserChart.fulfilled, (state, action) => {
                // state.loading = false;
                // state.transactions = action?.payload;
                return (state = {
                    ...state,
                    loading: false,
                    userChart: action.payload?.data,
                })
            })
            .addCase(queryUserChart.rejected, (state, { payload }) => {
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
export const getUserChartSelector = (state) => state.userChart

// The reducer
export default userChartSlice.reducer
