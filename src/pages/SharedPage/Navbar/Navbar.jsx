import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo1.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navIcon = (
    <>
      <Link to="/home ">
        <li>Home</li>
      </Link>
      <Link to="/service ">
        <li>Service</li>
      </Link>
      <Link to="/Blog ">
        <li>Blog</li>
      </Link>
    </>
  );
  return (
    <div className="navbar w-full">
      <div className="navbar-start gap-4">
        <div className="">
          <div onClick={() => setShow(!show)} className=" lg:hidden w-6 h-6 ">
            {show ? <RxCross2 /> : <AiOutlineMenuUnfold />}
          </div>
          <ul onClick={()=>setShow(false)}
            className={`menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-52 lg:hidden font-semibold absolute  ${
              show ? "w-full  md:w-1/2 lg:w-2/4 md:top-14 " : "left-[-320px] "
            }`}
          >
            {navIcon}
            <ul onClick={()=>setShow(false)}  className="navbar-end block md:hidden">
              <Link to="/signUP ">
                <li>Sign-Up</li>
              </Link>
              <Link to="/signIn ">
                <li>Sign-In</li>
              </Link>
            </ul>
          </ul>
        </div>
        <img src={logo} className="w-16 md:w-28" />
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold text-lg px-1 gap-4">{navIcon}</ul>
      </div>
      <ul className="navbar-end gap-5 font-semibold text-lg hidden md:flex">
        <Link to="/signUP ">
          <li>Sign-Up</li>
        </Link>
        <Link to="/signIn ">
          <li>Sign-In</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
