import React from "react";
import { Navigate } from "react-router-dom";
// import { isLogin } from "../utils/authUtils";
import DashBoardLayout from "../components/Backbone";

function PrivateRoute({ children }) {
  return true ? <DashBoardLayout>
    {children}
  </DashBoardLayout> : <Navigate to="/login" />;
}

export default PrivateRoute;
