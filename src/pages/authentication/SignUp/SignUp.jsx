import React from "react";
import signupImg from "../../../assets/images/singup.svg";
import Logo from "../../../shared/Logo/Logo";
import { Link, useNavigate } from "react-router";
import useSignupStore from "../../../store/signup/useSignupStore";
import API from "../../../lib/axios";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
const Signup = () => {
  const { user, setUser } = useSignupStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (userData) => API.post("/user", userData),
    onSuccess: (response) => {
      toast.success(response.data.message);
      setUser({});
      navigate("/signin");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    mutation.mutate(user);
  };
  return (
    <div className="min-h-screen flex poppins">
      <div className="w-[76%] bg-[#f5f7fa] px-12 py-8">
        <Link to="/">
          {" "}
          <Logo />
        </Link>
        <div className="flex items-center justify-center h-[calc(100%-56px)]">
          <img src={signupImg} alt="singUpImg" className="w-[460px]" />
        </div>
      </div>

      <div className="w-[24%] flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-bold text-[#46566B]">
          Welcome To E-School
        </h2>
        <p className="text-sm text-gray-400 mb-8">Please sign up to continue</p>

        <div className="flex gap-4 mb-5 w-full">
          <button className="border border-gray-300  px-6 h-10 w-[50%] rounded-lg  cursor-pointer flex items-center justify-center gap-2 hover:bg-[#E9EEF5]">
            <img
              width="20"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
            />
            Google
          </button>

          <button className="border border-gray-300 px-6 h-10 w-[50%] rounded-lg  cursor-pointer flex items-center justify-center gap-2 hover:bg-[#E9EEF5]">
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

        <div className="w-full space-y-4 mt-4">
          <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Name"
          />
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Email"
          />
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            className="w-full border border-gray-300 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A7A3EF]"
            placeholder="Password"
          />

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />I agree with privacy policy
          </label>

          <button
            onClick={handleSignup}
            disabled={mutation.isLoading}
            className="w-full mt-5 h-11 rounded-lg bg-[#4f46e5] text-white cursor-pointer hover:scale-105 active:scale-95"
          >
          {mutation.isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/signin">
            <span className="text-blue-500 cursor-pointer ">Sign In</span>
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
