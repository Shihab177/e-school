import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../shared/Logo/Logo";
import useAuthStore from "../../store/authStore/useAuthStore";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handelLogout =()=>{
    logout()
     navigate("/signin");
  }
  const menuItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "All User", path: "/dashboard/allusers" },
  ];

  return (
    <aside className="w-[260px] bg-[#21B573] text-white flex flex-col py-8 min-h-screen">
      <Link className="px-5" to="/">
        <Logo className="text-white" />
      </Link>

      <nav className="mt-8 flex flex-col space-y-2 text-[15px] font-medium mx-1">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path; // active check
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 cursor-pointer px-3 py-2 rounded-3xl transition-all text-white ${
                isActive ? "bg-white/30 font-bold" : "opacity-80 hover:opacity-100"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button onClick={handelLogout} className="mt-auto bg-white/20 py-2 hover:bg-white/30 transition-all mx-1 rounded-3xl">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
