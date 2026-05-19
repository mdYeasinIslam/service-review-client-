import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPage/Navbar/Navbar";

const Third = () => {
  return (
    <div>
      <div className="absolute z-[1] w-full text-white">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Third;
