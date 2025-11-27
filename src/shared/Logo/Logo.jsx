import React from 'react';
import logo from "../../assets/images/logo (6).png";
const Logo = () => {
    return (
        <div className=" flex items-center gap-x-2">
          <img className="w-18 h-14" src={logo} alt="logo" />
         <h1 className="text-[#56548C] text-2xl font-bold">E- School</h1>
        </div>
    );
};

export default Logo;