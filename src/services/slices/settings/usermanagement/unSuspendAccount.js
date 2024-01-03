import { createAsyncThunk } from '@reduxjs/toolkit'
import { unSuspendAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const queryUnsuspendAccount = createAsyncThunk(
    'unsuspend/queryUnsuspendAccount',
    async ({ id }) => {
        try {
            const response = await makeApiRequest(
                'put',
                unSuspendAccount(id),
            )
            return response?.data
        } catch (e) {}
    }
)
