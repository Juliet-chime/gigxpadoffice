import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockTrxCard } from '../../apis'

export const queryFireBlockTrxCard = createAsyncThunk(
    'fireblocktrxcard/queryFireBlockTrxCard',
    async ({ currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockTrxCard(currency)
            )
            return response?.data?.data
        } catch (e) {}
    }
)
