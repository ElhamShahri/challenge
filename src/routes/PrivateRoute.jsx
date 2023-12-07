import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = true;
  
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
