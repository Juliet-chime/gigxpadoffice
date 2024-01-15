import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import { otcRate } from '../../../apis'

export const queryUpdateOtcRates = createAsyncThunk(
    'rates/updateOtcRates',
    async ({ data }) => {
        try {
            const response = await makeApiRequest('post', otcRate(), data)
            return response?.data
        } catch (e) { }
    }
)
