import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { inviteAdmin } from "../../apis";

export const queryInviteAdmin = createAsyncThunk('invite/queryInviteAdmin', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', inviteAdmin(), data)
    return response?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data)
  }
})
