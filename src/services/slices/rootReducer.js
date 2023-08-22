import { combineReducers } from "redux";
import loginReducer from "./auth/login";
import setPasswordReducer from "./auth/setpassword"


const combinedReducer = combineReducers({
  login: loginReducer,
  setPassword:setPasswordReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'logOut') {
    localStorage.clear();
    state = undefined;
  }
  return combinedReducer(state, action);
};
