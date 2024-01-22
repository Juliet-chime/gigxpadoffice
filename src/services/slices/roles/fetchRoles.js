import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getRoles } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    role: {},
}

export const queryRoles = createAsyncThunk('getRoles/queryRoles', async () => {
    try {
        const response = await makeApiRequest('get', getRoles())
        return response?.data
    } catch (e) {}
})

export const roleSlice = createSlice({
    name: 'getRoles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryRoles.pending, (state) => {
                state.loading = true
            })
            .addCase(queryRoles.fulfilled, (state, action) => {
                state.loading = false
                state.role = action?.payload
            })
            .addCase(queryRoles.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getRolesSelector = (state) => state.roles

// The reducer
export default roleSlice.reducer
