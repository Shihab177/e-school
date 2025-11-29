import React from "react";
import { Link, useLocation } from "react-router";
import forbiddenImg from "../../assets/images/forbidden.webp";

const Forbidden = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <img
        src={forbiddenImg}
        alt="403 Forbidden"
        className="w-64 md:w-80 mb-6"
      />

      <h1 className="text-4xl font-bold text-red-600 mb-3">403 - Forbidden</h1>

      <p className="text-gray-600 text-lg mb-6">
        You do not have permission to access this page.
      </p>

      {location?.state?.from && (
        <p className="text-gray-500 mb-6 text-sm">
          You attempted to access:{" "}
          <span className="font-semibold">{location.state.from}</span>
        </p>
      )}

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;


