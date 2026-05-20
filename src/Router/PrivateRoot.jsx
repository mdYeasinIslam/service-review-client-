import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Context/UserContext";
import Loader from "../base-component/Loader";

const PrivateRoot = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();
  if (!loading) {
    return <Loader/>
  }
  
  if (user?.email) {
    return  children ;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoot;
