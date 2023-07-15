import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Overview from "../pages/Overview";
// import PrivateRoute from "./privateRoute";

const AllPages = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/dashboard" element={<Overview />}></Route>
      {/* <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchAll />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  </BrowserRouter>
);

export default AllPages;
