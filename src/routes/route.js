import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./privateRoute";
import { isSessionExpired } from "../utils/authUtils";

const AllPages = () => {

  // useEffect(()=>{
  //   const checkInvalidToken = async() => {
  //     const token = await localStorage.getItem('authToken')
  //     if(isSessionExpired(token)){
  //       await localStorage.setItem('authToken', "")
  //       window?.location?.reload()
  //     }
  //   }

  //   checkInvalidToken()
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          const Component = route.component
          if (route?.ispublic) return (
            <Route
              path={route?.path}
              element={<Component />}
              key={idx}
            />
          )
          return <Route path={route?.path}
            element={<PrivateRoute><Component /></PrivateRoute>}
            key={idx} />

        }
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AllPages;
