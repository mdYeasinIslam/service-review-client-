import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
