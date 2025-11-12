import React from "react";
import desk from "../assets/desk.webp";

const login = () => {
  return (
    <div className="bg-stone-400 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl h-[80vh] bg-amber-50 rounded-lg overflow-hidden flex flex-row">
        <img src={desk} alt="desk" className="object-cover w-1/2 h-full" />
        <div className=" w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-stone-700">
            Welcome to Plainly
          </h2>
          <form className="w-full max-w-sm flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-md border border-stone-300 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border border-stone-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md border border-stone-300 outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-stone-700 text-amber-50 rounded-md hover:bg-stone-800 transition"
            >
              Sign Up
            </button>
          </form>
          <h4 className="font-medium text-stone-500 mt-4">
            Already have an account? <span>Login</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default login;
