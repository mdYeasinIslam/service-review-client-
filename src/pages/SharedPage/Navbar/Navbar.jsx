import { useContext, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/src/assets/logo7 (1).png";

import { toast } from "react-toastify";
import { AuthProvider } from "../../../Context/UserContext";
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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Service" },
    { to: "/blog", label: "Blog" },
    { to: "/my-reviews", label: "My-Reviews" },
    { to: "/add-service", label: "Add-Service" },
  ];

  const UserMenu = () => (
    <>
      {user?.email ? (
        <div className="flex gap-x-2 lg:gap-x-2">
          <NavLink
            onClick={signOut}
            to="/signIn"
            className="tooltip"
            data-tip="Sign-Out"
          >
            <PiSignOutBold className="h-6 w-6" />
          </NavLink>
          <NavLink to="/profile" className="tooltip" data-tip="Profile">
            <div className="avatar online">
              <div className="w-8 h-8 rounded-full">
                <img src={user?.photoURL} alt="profile" />
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
        <NavLink to="signIn" className="tooltip" data-tip="Sign-In">
          <MdOutlineAccountCircle className="h-8 w-8" />
        </NavLink>
      )}
    </>
  );

  return (
    <div className="container mx-auto flex flex-row-reverse lg:flex-row justify-between lg:justify-start items-center">
      <div className="menu-item">
        <button
          onClick={multipleFuncActive}
          className="btn btn-circle btn-sm md:btn-md bg-transparent text-white mr-5 lg:hidden"
        >
          {show ? (
            <RxCross2 className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <AiOutlineMenuUnfold className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>
        <ul
          id="menu-show-2"
          onClick={multipleFuncDisable}
          className={`text-xl pl-5 pt-5 shadow rounded-box lg:hidden font-bold absolute z-50 ${
            show
              ? "menu-show w-[80%] md:w-1/2 h-[50vh] top-0 left-0 text-white"
              : "menu-hide w-[80%] md:w-1/2 top-0 left-[-620px]"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              <li>{link.label}</li>
            </NavLink>
          ))}
          <li>
            <UserMenu />
          </li>
        </ul>
      </div>
      <div className="w-36 md:w-40">
        <img src={logo} alt="logo" className="w-28 md:w-32 md:h-24" />
      </div>
      <nav className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal font-semibold text-lg px-1 menu-icon">
          {navLinks.slice(0, -1).map((link) => (
            <NavLink key={link.to} to={link.to}>
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex mr-5">
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
