import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = JSON.parse(localStorage.getItem("isLogin") || false);

  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
