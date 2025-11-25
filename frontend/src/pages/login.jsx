import React, { useState } from "react";
import { motion } from "framer-motion";
import desk from "../assets/desk.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ onSwitch }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        { email, password },
        { withCredentials: true }
      );
      toast.success("Login Successfull");
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
        <form
          className="w-full max-w-sm flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-stone-300 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-stone-300 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`p-3 text-amber-50 rounded-md transition ${
              loading
                ? "bg-stone-400 cursor-not-allowed"
                : "bg-stone-700  hover:bg-stone-800 "
            }`}
          >
            {loading ? "Logging in..." : "Login"}
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

export default Login;
