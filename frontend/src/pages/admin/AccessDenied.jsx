import React from "react";
import access from "../../assets/access-denied.gif";
import { Navigate, useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center -translate-y-14 ">
      <img src={access} alt="Access Denied" />
      <h2 className="text-red-800 text-3xl font-bold ">
        Looks like you got lost...
      </h2>
      <p className="text-gray-500 text-xl mt-4">
        Let us help guide you out and get you back home.
      </p>
      <button
        className="p-3 bg-red-800 mt-7 rounded-xl text-white font-semibold cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default AccessDenied;
