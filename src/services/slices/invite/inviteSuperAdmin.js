import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { inviteSuperAdmin } from "../../apis";

export const queryInviteSuperAdmin = createAsyncThunk('invite/queryInviteSuperAdmin', async (data, { rejectWithValue }) => {
  try {
    const response = await makeApiRequest('post', inviteSuperAdmin(), data)
    return response?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data)
  }
})