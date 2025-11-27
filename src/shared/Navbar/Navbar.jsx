import React from "react";
import logo from "../../assets/images/logo (6).png";
const Navbar = () => {
  return (
    <header className="bg-[#F0FFF0]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className=" flex items-center gap-x-2">
          <img className="w-18 h-14" src={logo} alt="logo" />
         <h1 className="text-[#56548C] text-2xl font-bold">E- School</h1>
        </div>
        <div className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-8 text-[#000000] text-base font-normal">
            <li>Books</li>
            <li>Courses</li>
            <li>Others</li>
            <li>Blog</li>
          </ul>
          <button className="bg-[#21B573] hover:bg-[#1A955C] rounded-[33px] shadow-sm text-[#FFFFFF] text-base font-normal py-3 px-7 transition-colors duration-200">Sing in</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
