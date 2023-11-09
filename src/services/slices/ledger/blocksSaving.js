import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockSaving } from '../../apis'

export const queryFireBlockSaving = createAsyncThunk(
    'fireblocksaving/queryFireBlockSaving',
    async ({ currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockSaving(currency)
            )
            return response?.data
        } catch (e) {}
    }
)
