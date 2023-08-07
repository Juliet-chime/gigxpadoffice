import { combineReducers } from "redux";
import loginReducer from "./auth/login";


const combinedReducer = combineReducers({
  login: loginReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'logOut') {
    localStorage.clear();
    state = undefined;
  }
  return combinedReducer(state, action);
};
