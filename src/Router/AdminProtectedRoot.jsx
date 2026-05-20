import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Context/UserContext";
import { toast } from "react-toastify";
import Loader from "../base-component/Loader";

const AdminProtectedRoot = ({ children }) => {
  const { user, loading, signOutAuth } = useContext(AuthProvider);
  const location = useLocation();
  if (!loading) {
    return <Loader/>
  }
  if (user?.email?.includes("admin")) {
    return children;
  }
  signOutAuth().then(() => {
    toast.error('You have no permission to access this page')
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }).catch((error)=>console.log(error))
};

export default AdminProtectedRoot;
