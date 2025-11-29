import React from "react";
import Logo from "../Logo/Logo";
import avatar from "../../assets/images/avatar.avif";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../store/authStore/useAuthStore";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { authStore, logout } = useAuthStore();
  const navigate = useNavigate();
  const handelSignout = () => {
    logout();
    navigate("/signin");
  };
  return (
    <header className="bg-[#F0FFF0] pt-[30px]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between ">
        <Logo />
        <div className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-8 text-[#000000] text-base font-normal ">
            <li className="cursor-pointer hover:underline">Books</li>
            <li className="cursor-pointer hover:underline">Courses</li>
            <li className="cursor-pointer hover:underline">Others</li>
            <li className="cursor-pointer hover:underline">Blog</li>
          </ul>
          {authStore.role==="admin" && (
            <Link to="/dashboard">
              {" "}
              <p className="flex items-center gap-2 -mr-4 text-lg text-[#21B573] cursor-pointer">
                <LayoutDashboard size={20} />
                Dashboard
              </p>
            </Link>
          )}
          {authStore && (
            <img
              className="h-14 w-14 -mr-4 rounded-full cursor-pointer"
              src={avatar}
              alt="profile"
            />
          )}
          {authStore ? (
            <button
              onClick={handelSignout}
              className="bg-[#21B573] hover:bg-[#1A955C] rounded-[33px] shadow-sm text-[#FFFFFF] text-base font-normal py-3 px-7 cursor-pointer transition-colors duration-200"
            >
              Sing Out
            </button>
          ) : (
            <Link to="/signin">
              {" "}
              <button className="bg-[#21B573] hover:bg-[#1A955C] rounded-[33px] shadow-sm text-[#FFFFFF] text-base font-normal py-3 px-7 cursor-pointer transition-colors duration-200">
                Sing in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
