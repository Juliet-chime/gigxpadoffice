import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./privateRoute";
import { isSessionExpired } from "../utils/authUtils";
import { clearLocalStorage } from "../utils/authFunc";

const AllPages = () => {
  
  const token = window.localStorage.getItem('authToken')

  useEffect(() => {
    const isTokenExpired =  isSessionExpired(token)

    if(isTokenExpired){
      clearLocalStorage()
      // window.location.replace("/login")
      // window.location.reload()
    }
  })

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
