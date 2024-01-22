import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import { getRate } from '../../../apis'

export const queryUpdateRates = createAsyncThunk(
    'rates/updateRates',
    async ({ data }) => {
        try {
            const response = await makeApiRequest('post', getRate(), data)
            return response?.data
        } catch (e) { }
    }
)
