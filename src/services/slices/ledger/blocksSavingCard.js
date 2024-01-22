import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockSavingCard } from '../../apis'

export const queryFireBlockSavingCard = createAsyncThunk(
    'fireblocksavingcard/queryFireBlockSavingCard',
    async ({ currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockSavingCard(currency)
            )
            return response?.data?.data
        } catch (e) {}
    }
)
