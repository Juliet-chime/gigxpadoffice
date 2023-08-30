import { combineReducers } from "redux";
import twoFaReducer from "./auth/2fa";
import roleReducer from './roles/fetchRoles'
import { clearLocalStorage } from "../../utils/authFunc";


const combinedReducer = combineReducers({
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
