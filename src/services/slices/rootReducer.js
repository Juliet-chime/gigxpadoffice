import { combineReducers } from "redux";
import loginReducer from "./auth/login";
import setPasswordReducer from "./auth/setpassword"
import twoFaReducer from "./auth/2fa";
import roleReducer from './roles/fetchRoles'
import { clearLocalStorage } from "../../utils/authFunc";


const combinedReducer = combineReducers({
  login: loginReducer,
  setPassword: setPasswordReducer,
  twoFA: twoFaReducer,
  roles: roleReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'logOut') {
    clearLocalStorage();
    state = undefined;
  }
  return combinedReducer(state, action);
};
