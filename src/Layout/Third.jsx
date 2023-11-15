import React from "react";
import Navbar from "../pages/SharedPage/Navbar/Navbar";
import { Outlet } from "react-router-dom";

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
