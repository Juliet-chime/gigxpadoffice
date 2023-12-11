import { createAsyncThunk } from '@reduxjs/toolkit'
import { unlockAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const queryUnlockAccount = createAsyncThunk(
    'unlock/queryUnlockAccount',
    async ({ id, params }) => {
        try {
            const response = await makeApiRequest(
                'put',
                unlockAccount(id),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)
