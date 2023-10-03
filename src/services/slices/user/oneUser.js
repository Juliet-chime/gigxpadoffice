import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getOneUser } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const queryOneUser = createAsyncThunk('getOneUser/queryOneUser', async ({id}) => {
  try {
    const response = await makeApiRequest('get', getOneUser(id))
    return response?.data
  } catch (e) {
    console.log(e)
  }
})

export const oneUserSlice = createSlice({
  name: "oneuser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryOneUser.pending, (state) => {
        return (state = {
          ...state,
          loading: true,
        });
      })
      .addCase(queryOneUser.fulfilled, (state, action) => {
        return (state = {
          ...state,
          loading: false,
          user: action.payload,
        });
      })
      .addCase(queryOneUser.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          loading: false,
          error: payload,
        });
      });
  }
});

// A selector
export const getOneUserSelector = (state) => state.user;

// The reducer
export default oneUserSlice.reducer;
