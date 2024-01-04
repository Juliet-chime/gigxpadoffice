import { createAsyncThunk } from '@reduxjs/toolkit'
import { lockAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const queryLockAccount = createAsyncThunk(
    'lock/queryLockAccount',
    async ({ id, data, params }) => {
        try {
            const response = await makeApiRequest(
                'put',
                lockAccount(id),
                data,
                params
            )
            return response?.data
        } catch (e) {}
    }
)
