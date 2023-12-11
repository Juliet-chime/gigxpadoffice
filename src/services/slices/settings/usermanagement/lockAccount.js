import { createAsyncThunk } from '@reduxjs/toolkit'
import { lockAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const queryLockAccount = createAsyncThunk(
    'lock/queryLockAccount',
    async ({ id, params }) => {
        try {
            const response = await makeApiRequest(
                'put',
                lockAccount(id),
                null,
                params
            )
            return response?.data
        } catch (e) {}
    }
)
