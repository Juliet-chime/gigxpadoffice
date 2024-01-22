import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { setPassword } from '../../apis'

export const querySetPassword = createAsyncThunk(
    'setPassword/querySetPassword ',
    async (data, { rejectWithValue }) => {
        try {
            const response = await makeApiRequest('post', setPassword(), data)
            return response?.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
