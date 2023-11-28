// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { makeApiRequest } from '../../baseApi'
// import { getFireBlockTrx } from '../../apis'

// export const queryFireBlockTrx = createAsyncThunk(
//     'fireblocktrx/queryFireBlockTrx',
//     async ({ currency }) => {
//         try {
//             const response = await makeApiRequest(
//                 'get',
//                 getFireBlockTrx(currency)
//             )
//             return response?.data
//         } catch (e) {}
//     }
// )

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApiRequest } from '../../baseApi'
import { getFireBlockTrx } from '../../apis'

const initialState = {
    loading: false,
    error: null,
    fireblockTrx: null,
}

export const queryFireBlockTrx = createAsyncThunk(
    'fireblocktrx/queryFireBlockTrx',
    async ({ currency }) => {
        try {
            const response = await makeApiRequest(
                'get',
                getFireBlockTrx(currency)
            )
            return response?.data
        } catch (e) {}
    }
)

export const fireBlockTrxSlice = createSlice({
    name: 'fireBlockTrx',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryFireBlockTrx.pending, (state) => {
                state.loading = true
            })
            .addCase(queryFireBlockTrx.fulfilled, (state, action) => {
                state.loading = false
                state.fireblockTrx = action?.payload?.data
            })
            .addCase(queryFireBlockTrx.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    },
})

// A selector
export const getFireblockTrxSelector = (state) => state.fireblockTrx

// The reducer
export default fireBlockTrxSlice.reducer
