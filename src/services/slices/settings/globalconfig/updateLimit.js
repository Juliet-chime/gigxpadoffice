import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import { updateLimit } from '../../../apis'

export const queryUpdateLimit = createAsyncThunk(
    'limit/querylimit',
    async ({ data }) => {
        try {
            const response = await makeApiRequest('post', updateLimit(), data)
            return response?.data
        } catch (e) {}
    }
)
