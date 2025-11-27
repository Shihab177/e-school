import React from "react";
import Logo from "../../../shared/Logo/Logo";
import signInImg from "../../../assets/images/signIn.svg";
import { Link } from "react-router";
const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex poppins">
      <div className="w-[76%] flex flex-col px-12 py-8">
        <Link to="/">
          {" "}
          <Logo />
        </Link>
        <div className="flex items-center justify-center h-full">
          <img src={signInImg} className="w-[460px]" alt="loginImg" />
        </div>
      </div>

      <div className="w-[24%] bg-white flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-bold text-[#46566B]">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-7">Please sign in to continue</p>

        <div className="space-y-4 mb-3 mt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-11 px-3 border border-gray-300 rounded-lg text-sm outline-0 focus:ring-2 focus:ring-[#A7A3EF]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-11 px-3 border border-gray-300 rounded-lg text-sm outline-0 focus:ring-2 focus:ring-[#A7A3EF]"
          />
        </div>

        <div className="flex justify-between items-center mb-5 w-full">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            Remember me
          </label>
          <button className="text-xs text-gray-500 hover:text-blue-500">
            Forgot Password?
          </button>
        </div>

        <button className="w-full h-11 bg-[#4f46e5] cursor-pointer hover:scale-105 active:scale-95 text-white rounded-lg font-medium">
          Sign In
        </button>

        <p className="text-sm text-gray-600 mt-4 mb-4 text-center">
          Don't have account?{" "}
          <Link to="/signup" className="text-blue-500">
            Create account
          </Link>
        </p>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-xs text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex gap-3 w-full mt-3">
          <button className="flex items-center justify-center gap-2 w-1/2 h-10 cursor-pointer border border-gray-300 rounded-lg hover:bg-[#E9EEF5]">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width="20"
            />
            Google
          </button>

          <button className="flex items-center justify-center gap-2 w-1/2 h-10  cursor-pointer border border-gray-300 rounded-lg hover:bg-[#E9EEF5]">
            <img
              src="https://www.svgrepo.com/show/349375/github.svg"
              width="20"
            />
            Github
          </button>
        </div>

        <div className="mt-10 text-center text-xs text-gray-400">
          <p>Privacy Notice &nbsp; | &nbsp; Term of Service</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
