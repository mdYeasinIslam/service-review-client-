import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo7 (1).png";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";

import { AuthProvider } from "../../../Context/UserContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, signOutAuth, navHandler, navControl } =
    useContext(AuthProvider);
  const signOut = () => {
    signOutAuth()
      .then(() => {
        toast("You are successfully log-Out");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const multipleFuncActive = () => {
    setShow(!show);
    navHandler(!navControl);
  };
  const multipleFuncDisable = () => {
    navHandler(false);
    setShow(false);
  };

  return (
    <div className="container mx-auto flex flex-row-reverse lg:flex-row justify-between lg:justify-start items-center ">
      <div className=" menu-item">
        <div
          onClick={multipleFuncActive}
          className=" btn btn-circle btn-sm md:btn-md bg-transparent text-white mr-5  lg:hidden"
        >
          {show ? (
            <RxCross2 className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <AiOutlineMenuUnfold className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </div>
        <ul
          id="menu-show-2"
          onClick={multipleFuncDisable}
          className={`text-xl pl-5 pt-5 shadow  rounded-box  lg:hidden font-bold absolute  ${
            show
              ? " menu-show  w-[80%] md:w-1/2  h-[100vh] top-0 left-0 text-white"
              : "menu-hide  w-[80%] md:w-1/2 top-0 left-[-620px]"
          }`}
        >
          <NavLink to="/home ">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services">
            <li>Service</li>
          </NavLink>
          <NavLink to="/blog ">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/my-reviews ">
            <li>My-Reviews</li>
          </NavLink>
          <NavLink to="/add-service ">
            <li>Add-Service</li>
          </NavLink>
          {user?.email ? (
             <div className="flex justify-around items-center ">
             <NavLink
               onClick={signOut}
               to="/signIn"
               className="tooltip "
               data-tip="Sign-Out"
             >
              <PiSignOutBold className="h-6 w-6 " /><span>logOut</span>
             </NavLink>
             <NavLink to='/profile'   className="tooltip "
               data-tip="Profile">
               <div className="avatar online">
                 <div className="w-8 h-8 rounded-full">
                  <img src={ user?.photoURL}className=" " alt="img" />
                 </div>
               </div>
                 <p>Profile</p>
             </NavLink>
           </div >
          ) : (
            <NavLink to="signIn" className="tooltip" data-tip="Sign-In">
              <MdOutlineAccountCircle className="h-8 w-8" />
            </NavLink>
          )}
        </ul>
      </div>
      <div className="w-36 md:w-40">
        <img src={logo} className="w-28 md:w-32 md:h-24 " />
      </div>
      <div className="navbar-center  hidden lg:flex  mx-auto">
        <ul className="menu menu-horizontal font-semibold text-lg px-1  menu-icon">
          <NavLink to="/home ">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services">
            <li>Service</li>
          </NavLink>
          <NavLink to="/blog ">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/my-reviews ">
            <li>My-Reviews</li>
          </NavLink>
          <NavLink to="/add-service ">
            <li>Add-Service</li>
          </NavLink>
        </ul>
      </div>
      <div className=" hidden lg:flex mr-5 ">
        {user?.email ? (
          <div className="flex  gap-x-2">
            <NavLink
              onClick={signOut}
              to="/signIn"
              className="tooltip"
              data-tip="Sign-Out"
            >
              <PiSignOutBold className="h-6 w-6" />
            </NavLink>
            <NavLink to='/profile'   className="tooltip"
              data-tip="Profile">
              <div className="avatar online">
                <div className="w-8 h-8 rounded-full">
                  <img src={ user?.photoURL}className=" " alt="img" />
                </div>
              </div>
            </NavLink>
          </div >
        ) : (
          <NavLink to="signIn" className="tooltip" data-tip="Sign-In">
            <MdOutlineAccountCircle className="h-8 w-8" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
