import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-8 text-gray-700">
        Oops! Page Not Found
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
