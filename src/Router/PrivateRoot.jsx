import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Context/UserContext";

const PrivateRoot = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();
  if (!loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user?.email) {
    return  children ;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoot;
