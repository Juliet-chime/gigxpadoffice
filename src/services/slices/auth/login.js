import { createSlice } from "@reduxjs/toolkit";
import makeAPICall from "../../../utils/apiUtils";
// import history from "../../history";
// import { AUTH_TOKEN, REDIRECT_URL } from "../../../utils/constants";
import { message } from "antd";

const initialState = {
  loading: false,
  hasErrors: null,
  user: {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true;
    },
    getAppSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

// Three actions generated from the slice
const { getApp, getAppSuccess, getAppFailure } = loginSlice.actions;

// A selector
export const getLoginSelector = (state) => state.login;

// The reducer
export default loginSlice.reducer;

// api call action
export const loginUser = (data) => (dispatch) => {
  dispatch(getApp());
  return makeAPICall({
    path: "/auth/login/",
    payload: data,
    method: "POST",
  })
    .then((res) => {
      console.log(res, "login successful");
      dispatch(getAppSuccess(res));
    })
    .catch((err) => {
      message.error(err.message, 5);
      dispatch(getAppFailure(err));
    });
};
