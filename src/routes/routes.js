import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Overview from "../pages/Overview";
import DashBoardLayout from "../components/Backbone";
// import PrivateRoute from "./privateRoute";

const AllPages = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
    </Routes>
    <DashBoardLayout>
      <Routes>
        <Route exact path="/dashboard" element={<Overview />}></Route>
        <Route
          exact
          path="/transactions"
          element={<h1>transactions</h1>}
        ></Route>
        <Route exact path="/crypto" element={<h1>crypto</h1>}></Route>
        <Route exact path="/bills" element={<h1>bills</h1>}></Route>
        <Route exact path="/wallets" element={<h1>wallets</h1>}></Route>
        <Route exact path="/card" element={<h1>cards</h1>}></Route>
        <Route exact path="/customers" element={<h1>customers</h1>}></Route>
        <Route exact path="/settings" element={<h1>settings</h1>}></Route>
        {/* <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchAll />
          </PrivateRoute>
        }
      /> */}
      </Routes>
    </DashBoardLayout>
  </BrowserRouter>
);

export default AllPages;
