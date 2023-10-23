import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { fetchAdmins } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    admins: [],
}

export const queryAdmins = createAsyncThunk(
    'getAdmins/queryAdmins',
    async () => {
        try {
            const response = await makeApiRequest('get', fetchAdmins())
            return response?.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const adminsSlice = createSlice({
    name: 'getAdmins',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryAdmins.pending, (state) => {
                state.loading = true
            })
            .addCase(queryAdmins.fulfilled, (state, action) => {
                state.loading = false
                state.admins = action?.payload?.data
            })
            .addCase(queryAdmins.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getAdminsSelector = (state) => state.admins

// The reducer
export default adminsSlice.reducer
