import { createAsyncThunk } from '@reduxjs/toolkit'
import { removeAdmin } from '../../apis'
import { makeApiRequest } from '../../baseApi'

export const queryDeleteAdminAccount = createAsyncThunk(
    'remove/queryDeleteAdminAccount',
    async ({ id }) => {
        try {
            const response = await makeApiRequest(
                'delete',
                removeAdmin(id),
            )
            return response?.data
        } catch (e) { }
    }
)
