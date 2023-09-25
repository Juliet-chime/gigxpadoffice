import { combineReducers } from "redux";
// import loginReducer from './auth/login'
import twoFaReducer from "./auth/2fa";
import roleReducer from './roles/fetchRoles'
import transactionReducer from './transactions/getTransactions'
import fiatMetricsReducer from './dashboard/fiatMetrics'
import fiatRevenueReducer from './dashboard/fiatRevenue'
import fiatProfitReducer from './dashboard/fiatProfit'
import cryptoMetricsReducer from './dashboard/cryptoMetrics'
import { clearLocalStorage } from "../../utils/authFunc";
import userChartReducer from './user/userChart'

const combinedReducer = combineReducers({
  // login:loginReducer,
  twoFA: twoFaReducer,
  roles: roleReducer,
  transactions: transactionReducer,
  fiatMetrics: fiatMetricsReducer,
  fiatRevenue: fiatRevenueReducer,
  fiatProfit: fiatProfitReducer,
  cryptoMetrics: cryptoMetricsReducer,
  userChart: userChartReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'logOut') {
    clearLocalStorage();
    state = undefined;
  }
  return combinedReducer(state, action);
};
