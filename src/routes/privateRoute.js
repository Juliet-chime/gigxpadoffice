import React from "react";
import { Navigate } from "react-router-dom";
import DashBoardLayout from "../components/Backbone";

function PrivateRoute({ children }) {

  const token = localStorage.getItem('authToken')
  return token ? <DashBoardLayout>
                   {children}
                </DashBoardLayout>
             : <Navigate to="/" />;
}

export default PrivateRoute;
