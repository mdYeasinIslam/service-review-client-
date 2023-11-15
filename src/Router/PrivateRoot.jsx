import React, { useContext } from "react";
import { AuthProvider } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoot = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const loction = useLocation();
  if (!loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user?.email) {
    return  children ;
  }
  return <Navigate to="/signIn" state={{ from: loction }} replace />;
};

export default PrivateRoot;
