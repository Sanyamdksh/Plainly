import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import main from "../assets/main.webp";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = async () => {
    await fetch("http://localhost:3000/logout", {
      method: "GET",
      credentials: "include",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-amber-50">
      {/* NAVBAR */}
      <div className="flex flex-row items-center p-12 justify-between">
        <h2 className="font-bold text-4xl text-stone-700 cursor-pointer">
          Plainly
        </h2>
        <div className="gap-x-10 flex flex-row justify-center mt-2 text-stone-700">
          <p className="text-lg font-normal hover:text-stone-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
            Product
          </p>
          <p className="text-lg font-normal hover:text-stone-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
            Reviews
          </p>
          <p className="text-lg font-normal hover:text-stone-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
            About Us
          </p>
        </div>
        <div className="flex gap-x-6 text-xl">
          <TbLogout2
            className="cursor-pointer hover:text-red-700 hover:scale-125 transition-transform duration-200 text-red-600"
            onClick={handleLogout}
          />
          <RiShoppingCart2Line className="cursor-pointer hover:text-stone-900 hover:scale-125 transition-transform duration-200" />
          <div className="profile">
            <CgProfile
              className="cursor-pointer hover:text-stone-900 hover:scale-125 transition-transform duration-200"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            />
            {open && (
              <div
                className="absolute bg-white shadow-xl rounded-lg p-5 z-50 right-2 w-56"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <h3 className="text-lg font-semibold text-stone-700">
                  Hello, User
                </h3>
                <p className="text-sm text-stone-500 mb-4">abc@gmail.com</p>
                <ul className="space-y-3 text-stone-700 font-medium">
                  <li
                    className="cursor-pointer hover:text-black"
                    onClick={() => navigate("/order-hist")}
                  >
                    My Orders
                  </li>
                  <li
                    className="cursor-pointer hover:text-black"
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </li>
                  <li
                    className="cursor-pointer hover:text-black"
                    onClick={() => navigate("/profile")}
                  >
                    Edit Profile
                  </li>
                  <li
                    className="cursor-pointer text-red-600 hover:text-red-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-5">
        {/* LEFT TEXT SECTION */}
        <div className="max-w-lg text-center md:text-left mt-10 md:mt-0 mb-5">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Bring Home the Beauty of <br />
            <span className="text-stone-600 italic inline-block mt-4">
              Simple Living
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Explore our collection of handcrafted lamps, indoor plants, and
            elegant ceramic pots thoughtfully made to brighten and refresh your
            home.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-md text-lg font-medium transition">
              Shop Now
            </button>
            {/* <button className="border border-stone-700 text-stone-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-stone-700 hover:text-white transition">
              Explore
            </button> */}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src={main}
            alt="Main setup"
            className="rounded-2xl  w-[85%] md:w-[90%] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
