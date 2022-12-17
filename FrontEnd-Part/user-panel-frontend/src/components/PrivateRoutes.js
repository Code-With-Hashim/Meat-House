import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PraviteRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
