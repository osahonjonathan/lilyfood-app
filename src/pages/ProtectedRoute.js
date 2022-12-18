import React from "react";
import { Navigate } from "react-router-dom";
import { getUserStorage } from "../utils/localStorageData";

const ProtectedRoute = ({ children }) => {
  const user = getUserStorage();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
