import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import getRate from './getRate'

export const queryUpdateRates = createAsyncThunk(
    'rates/updateRates',
    async ({ data }) => {
        try {
            const response = await makeApiRequest('post', getRate(), data)
            console.log(response.data, 'ssssssssss')
            return response?.data
        } catch (e) {}
    }
)
