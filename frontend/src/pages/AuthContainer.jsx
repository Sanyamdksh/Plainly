import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./login";
import Signup from "./signup";

const AuthContainer = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <>
        <motion.div
          key={login ? "login-bg" : "singup-bg"}
          className="absolute inset-0 bg-stone-200"
          initial={{ x: login ? "100%" : "=100%" }}
          animate={{ x: "0%" }}
          exit={{ x: login ? "-100%" : "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <AnimatePresence mode="wait">
          {login ? (
            <Login key="login" onSwitch={() => setLogin(false)} />
          ) : (
            <Signup key="signup" onSwitch={() => setLogin(true)} />
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default AuthContainer;
