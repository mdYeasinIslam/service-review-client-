import { useContext, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthProvider } from "../../../Context/UserContext";

const NavbarCopy = () => {
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

  const toggleMenu = () => {
    setShow(!show);
    navHandler(!navControl);
  };

  const closeMenu = () => {
    navHandler(false);
    setShow(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Service" },
    { to: "/blog", label: "Blog" },
    { to: "/my-reviews", label: "My-Reviews" },
    { to: "/about", label: "About Us" },
    // { to: "/add-service", label: "Add-Service" },
  ];

  return (
    <header className="sticky top-0 border-b border-neutral-800 bg-black/70 z-50 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">✈️</span>
            <Link
              to={"/"}
              className="text-xl font-bold text-white tracking-tight"
            >
              Adventa
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium transition-colors"
                    : "hover:text-white transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {user?.email ? (
              <>
                <button
                  onClick={signOut}
                  className="px-2 py-1 text-neutral-400 hover:bg-[var(--primary-button-500)] hover:text-white transition-colors"
                >
                  Sign Out
                </button>
                <NavLink
                  to="/profile"
                  className="text-neutral-400 hover:text-white"
                >
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/signIn"
                className="bg-[var(--primary-button-500)] hover:bg-[var(--primary-button-400)] transition-colors text-black text-sm font-semibold px-4 py-2 rounded-lg"
              >
                Sign In
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleMenu} className="text-white p-2">
              {show ? (
                <RxCross2 className="w-5 h-5" />
              ) : (
                <AiOutlineMenuUnfold className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {show && (
        <nav
          onClick={closeMenu}
          className="md:hidden absolute w-full pt-5 pb-10 px-5  border-t border-neutral-800 bg-black "
        >
          <div className="flex flex-col gap-5 text-sm text-neutral-400">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium transition-colors"
                    : "hover:text-white transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
            {user?.email ? (
              <>
                <button
                  onClick={signOut}
                  className="text-left text-neutral-400 hover:bg-amber-400 hover:text-white transition-colors"
                >
                  Sign Out
                </button>
                <NavLink
                  to="/profile"
                  className="text-neutral-400 hover:text-white"
                >
                  Profile
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/signIn"
                className="bg-amber-500 hover:bg-amber-400 transition-colors text-black text-sm font-semibold px-4 py-2 rounded-lg inline-block"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavbarCopy;
