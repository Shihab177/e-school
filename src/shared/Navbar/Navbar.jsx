import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <header className="bg-[#F0FFF0] pt-[30px]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between ">
       <Logo/>
        <div className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-8 text-[#000000] text-base font-normal ">
            <li className="cursor-pointer hover:underline">Books</li>
            <li className="cursor-pointer hover:underline">Courses</li>
            <li className="cursor-pointer hover:underline">Others</li>
            <li className="cursor-pointer hover:underline">Blog</li>
          </ul>
          <button className="bg-[#21B573] hover:bg-[#1A955C] rounded-[33px] shadow-sm text-[#FFFFFF] text-base font-normal py-3 px-7 cursor-pointer transition-colors duration-200">Sing in</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
