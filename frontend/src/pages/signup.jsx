import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import desk from "../assets/desk.webp";
import { useNavigate } from "react-router-dom";

const Signup = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/users/register",
        { fullname, email, password },
        { withCredentials: true }
      );
      // alert(res.data);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-5xl h-[80vh] bg-amber-50 rounded-lg overflow-hidden flex flex-row z-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <img src={desk} alt="desk" className="object-cover w-1/2 h-full" />
      <div className=" w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-stone-700">
          Welcome to Plainly
        </h2>
        <form
          className="w-full max-w-sm flex flex-col gap-4 mt-4"
          onSubmit={handleSignup}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md border border-stone-300 outline-none"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-stone-300 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-stone-300 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Signining up..." : "Sign Up"}
          </button>
        </form>
        <h4 className="font-medium text-stone-500 mt-4">
          Already have an account?{" "}
          <span
            onClick={onSwitch}
            className="text-stone-700 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </h4>
      </div>
    </motion.div>
  );
};

export default Signup;
