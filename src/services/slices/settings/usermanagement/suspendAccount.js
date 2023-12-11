import { createAsyncThunk } from '@reduxjs/toolkit'
import { suspendAccount } from '../../../apis'
import { makeApiRequest } from '../../../baseApi'

export const querySuspendAccount = createAsyncThunk(
    'suspend/querySuspendAccount',
    async ({ params, data }) => {
        try {
            const response = await makeApiRequest(
                'put',
                suspendAccount(),
                data,
                params
            )
            return response?.data
        } catch (e) {}
    }
)
