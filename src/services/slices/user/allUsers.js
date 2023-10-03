import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../baseApi";
import { getAllUsers } from "../../apis";

const initialState = {
  loading: false,
  error: null,
  allUsers: [],
};

export const queryAllUser = createAsyncThunk('getAllUsers/queryAllUser', async () => {
  try {
    const response = await makeApiRequest('get', getAllUsers())
    return response?.data
  } catch (e) {
    console.log(e)
  }
})

export const allUsersSlice = createSlice({
  name: "allusers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryAllUser.pending, (state) => {
        return (state = {
          ...state,
          loading: true,
        });
      })
      .addCase(queryAllUser.fulfilled, (state, action) => {
        return (state = {
          ...state,
          loading: false,
          allUsers: action.payload,
        });
      })
      .addCase(queryAllUser.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          loading: false,
          error: payload,
        });
      });
  }
});

// A selector
export const getAllUsersSelector = (state) => state.allUsers;

// The reducer
export default allUsersSlice.reducer;
