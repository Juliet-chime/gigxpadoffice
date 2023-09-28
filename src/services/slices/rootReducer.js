import { combineReducers } from "redux";
import twoFaReducer from "./auth/2fa";
import roleReducer from './roles/fetchRoles'
import fiatTransactionReducer from './transactions/getFiatTransactions'
import billTransactionReducer from './transactions/getBillTransactions'
import cryptoTransactionReducer from './transactions/getCryptoTransactions'
import oneFiatTransactionReducer from './transactions/getOneFiatTransaction'
import oneBillTransactionReducer from './transactions/getOneBillTransaction'
import oneCryptoTransactionReducer from './transactions/getOneCryptoTransaction'
import fiatMetricsReducer from './dashboard/fiatMetrics'
import fiatRevenueReducer from './dashboard/fiatRevenue'
import fiatProfitReducer from './dashboard/fiatProfit'
import cryptoMetricsReducer from './dashboard/cryptoMetrics'
import userChartReducer from './user/userChart'
import allUsersReducer from './user/allUsers'
import { clearLocalStorage } from "../../utils/authFunc";

const combinedReducer = combineReducers({
  twoFA: twoFaReducer,
  roles: roleReducer,
  fiatTransactions: fiatTransactionReducer,
  oneBillTransaction:oneBillTransactionReducer,
  billTransactions: billTransactionReducer,
  oneFiatTransaction:oneFiatTransactionReducer,
  cryptoTransactions:cryptoTransactionReducer,
  oneCryptoTransaction:oneCryptoTransactionReducer,
  fiatMetrics: fiatMetricsReducer,
  fiatRevenue: fiatRevenueReducer,
  fiatProfit: fiatProfitReducer,
  cryptoMetrics: cryptoMetricsReducer,
  userChart: userChartReducer,
  allUsers: allUsersReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'logOut') {
    clearLocalStorage();
    state = undefined;
  }
  return combinedReducer(state, action);
};
