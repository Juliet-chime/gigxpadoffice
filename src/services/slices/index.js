// src/services/slices/index.js
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import loginReducer from "./auth/login";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "counter",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
});

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export default PersistedReducer;
