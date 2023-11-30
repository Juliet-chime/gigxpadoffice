import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../../baseApi'
import { getFees } from '../../../apis'

export const queryUpdateFee = createAsyncThunk(
    'fee/queryUpdateFee',
    async ({ data }) => {
        try {
            const response = await makeApiRequest('post', getFees(), data)
            console.log(response.data)
            return response?.data
        } catch (e) {}
    }
)
