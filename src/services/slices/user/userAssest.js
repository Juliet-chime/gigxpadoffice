import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getUserAssest } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    userAssest: [],
}

export const queryUserAssest = createAsyncThunk(
    'getUserAssest/queryUserAssest',
    async ({ id }) => {
        try {
            const response = await makeApiRequest('get', getUserAssest(id))
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const userAssestSlice = createSlice({
    name: 'userAssest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryUserAssest.pending, (state) => {
                return (state = {
                    ...state,
                    loading: true,
                })
            })
            .addCase(queryUserAssest.fulfilled, (state, action) => {
                return (state = {
                    ...state,
                    loading: false,
                    userAssest: action.payload,
                })
            })
            .addCase(queryUserAssest.rejected, (state, { payload }) => {
                return (state = {
                    ...state,
                    loading: false,
                    error: payload,
                })
            })
    },
})

// A selector
export const getUserAssestSelector = (state) => state.userAssest

// The reducer
export default userAssestSlice.reducer
