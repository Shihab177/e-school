import React from "react";
import signupImg from "../../../assets/images/singup.svg";
import Logo from "../../../shared/Logo/Logo";
import { Link } from "react-router";
const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SECTION */}
      <div className="w-[76%] bg-[#f5f7fa] px-12 py-8">
        <Link to="/">
          {" "}
          <Logo />
        </Link>
        <div className="flex items-center justify-center h-[calc(100%-56px)]">
          <img src={signupImg} alt="singUpImg" className="w-[460px]" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[24%] flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-bold text-[#46566B]">
          Welcome To Lineone
        </h2>
        <p className="text-sm text-gray-400 mb-8">Please sign up to continue</p>

        {/* Social Login */}
        <div className="flex gap-4 mb-5 w-full">
          <button className="border border-gray-300  px-6 h-10 w-[50%] rounded-lg flex items-center justify-center gap-2 hover:bg-[#E9EEF5]">
            <img
              width="20"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
            />
            Google
          </button>

          <button className="border border-gray-300 px-6 h-10 w-[50%] rounded-lg flex items-center justify-center gap-2 hover:bg-[#E9EEF5]">
            <img
              width="20"
              src="https://www.svgrepo.com/show/349375/github.svg"
              alt="github"
            />
            Github
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-xs text-gray-500">
            OR SIGN UP WITH EMAIL
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form className="w-full space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Username"
          />
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Password"
          />
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Repeat Password"
          />

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />I agree with privacy policy
          </label>

          <button className="w-full h-11 rounded-lg bg-[#4f46e5] text-white">
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
