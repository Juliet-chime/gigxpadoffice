import React from "react";
import 'antd/dist/reset.css';
import "./assets/css/App.css";
import "./assets/fonts/font.css"
import './index.css'

import AllPages from "./routes/route";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./services/store";
import './services/baseApi'

function App() {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AllPages />
    </PersistGate>
  </Provider>
    ;
}

export default App;
