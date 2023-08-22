import React from "react";
import { Navigate } from "react-router-dom";
// import { isLogin } from "../utils/authUtils";
import DashBoardLayout from "../components/Backbone";
import { getAuth } from "../utils/authFunc";

function PrivateRoute({ children }) {

  const token = getAuth('token');
  return token ? <DashBoardLayout>
    {children}
  </DashBoardLayout> : <Navigate to="/" />;
}

export default PrivateRoute;
