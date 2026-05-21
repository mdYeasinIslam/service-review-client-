import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const nav = [
  // { id: "overview", label: "Overview", icon: "📊", href: "/admin/overview" },
  { id: "services", label: "Services", icon: "✈️", href: "/admin/services" },
  {
    id: "add-service",
    label: "Add Package",
    icon: "➕",
    href: "/admin/add-service",
  },
  {
    id: 'reviews',
    label:"Reviews",
    icon:"📝",
    href:"/admin/reviews"
  }
];
const Sidebar = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  if (loggedOut) {
    return navigate("/signIn");
  }

  const sidebarW = sidebarOpen ? 240 : 68;

  return (
    <div
      className="min-h-screen  h-screen flex flex-col flex-shrink-0 sticky top-0 self-start max-h-screen overflow-hidden border-r border-amber-900/20 bg-black/50 transition-all duration-250"
      style={{ width: sidebarW }}
    >
      {/* Logo Section */}
      <div
        className={`flex items-center ${sidebarOpen ? "justify-between" : "justify-center"} border-b border-amber-900/30 ${sidebarOpen ? "px-5 py-6" : "px-0 py-6"}`}
      >
        {sidebarOpen && (
          <div>
            <div className="text-xl font-black text-white tracking-tight">
              Adventa
            </div>
            <div className="text-xs font-medium text-base-50">Admin Panel</div>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="bg-transparent border-none text-white cursor-pointer text-lg p-1 "
        >
          {/* ☰ */}
          <IoMdMenu />
        </button>
      </div>

      {/* Navigation */}
      <nav className=" flex-1 py-4">
        {nav.map((n) => (
          <NavLink
            to={n.href}
            key={n.id}
            className={({ isActive }) =>
              `w-full flex items-center transition-all duration-150 border-l-4 text-sm font-medium cursor-pointer ${
                isActive
                  ? "bg-white border-l-amber-400 text-black font-bold"
                  : "border-l-transparent text-white"
              } ${sidebarOpen ? "justify-start gap-3 px-5 py-3" : "justify-center gap-3 px-0 py-3"}`
            }
            title={!sidebarOpen ? n.label : ""}
          >
            <span className="text-base">{n.icon}</span>
            {sidebarOpen && <span>{n.label}</span>}
          </NavLink>
        ))}
      </nav>
      {/* Logout Section */}
      <div
        className={`border-t border-amber-900/30 flex flex-col gap-3 ${sidebarOpen ? "items-start px-5 py-4" : "items-center px-0 py-4"}`}
      >
        {sidebarOpen && (
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div>
              <div className=" font-bold text-white">Admin</div>
              <div className="text-xs text-white">admin@adventa.com</div>
            </div>
          </div>
        )}
        <button
          onClick={() => setLoggedOut(true)}
          className={`bg-amber-900/30 text-white border-none rounded-lg cursor-pointer font-semibold text-sm hover:bg-amber-900/50 flex items-center gap-1.5 transition-colors ${
            sidebarOpen ? "w-full px-3.5 py-2" : "px-2 py-2"
          }`}
          title="Logout"
        >
          {/* 🔒 */}
          <IoLogOutSharp className="w-5 h-5" />
          {sidebarOpen && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
