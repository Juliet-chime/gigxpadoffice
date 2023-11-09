import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockTrx } from '../../apis'

export const queryFireBlockTrx = createAsyncThunk(
    'fireblocktrx/queryFireBlockTrx',
    async ({ currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockTrx(currency)
            )
            return response?.data
        } catch (e) {}
    }
)
