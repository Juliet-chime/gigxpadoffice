import { createAsyncThunk } from '@reduxjs/toolkit'
import { suspendAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const querySuspendAccount = createAsyncThunk(
    'suspend/querySuspendAccount',
    async ({ id }) => {
        try {
            const response = await makeApiRequest(
                'put',
                suspendAccount(id),
            )
            return response?.data
        } catch (e) { }
    }
)
