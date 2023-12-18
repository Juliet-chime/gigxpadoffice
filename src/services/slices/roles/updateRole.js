import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { updateAdminRole } from '../../apis'

export const queryUpdateRole = createAsyncThunk(
    'updateRole/queryUpdateRole',
    async ({ data, id }, { rejectWithValue }) => {
        try {
            const response = await makeApiRequest('put', updateAdminRole(id), data)
            return response?.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
