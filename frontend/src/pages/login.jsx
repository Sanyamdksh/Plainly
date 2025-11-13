import React from "react";
import { motion } from "framer-motion";
import desk from "../assets/desk.webp";

const login = ({ onSwitch }) => {
  return (
    <motion.div
      className="w-full max-w-5xl h-[80vh] bg-amber-50 rounded-lg overflow-hidden flex flex-row-reverse z-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <img src={desk} alt="desk" className="object-cover w-1/2 h-full" />
      <div className=" w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-stone-700">Welcome Back!</h2>
        <form className="w-full max-w-sm flex flex-col gap-4 mt-4">
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
            Login
          </button>
        </form>
        <h4 className="font-medium text-stone-500 mt-4">
          Don't have an account?{" "}
          <span
            onClick={onSwitch}
            className="text-stone-700 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </h4>
      </div>
    </motion.div>
  );
};

export default login;
