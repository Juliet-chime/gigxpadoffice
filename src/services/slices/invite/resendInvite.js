import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { resendInviteAdmin } from '../../apis'

export const queryResendInviteAdmin = createAsyncThunk(
    'reinvite/queryReinviteAdmin',
    async (data, { rejectWithValue }) => {
        try {
            const response = await makeApiRequest(
                'post',
                resendInviteAdmin(),
                data
            )
            return response?.data
        } catch (err) {
            return rejectWithValue(err.data)
        }
    }
)
