import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="p-5 bg-stone-100 border-t border-stone-300">
      <div className="px-20 pt-10 grid grid-cols-1 md:grid-cols-3 gap-14">
        <div>
          <div className="flex items-center">
            <img src={Logo} alt="Plainly logo" className="h-10 w-auto mr-2" />
            <h2 className="font-bold text-3xl text-stone-700">Plainly</h2>
          </div>
          <h2 className="text-stone-600 text-md">
            Bring home the beauty of Simple Living
          </h2>
        </div>
        <div className="px-12">
          <h3 className="font-semibold text-black mb-1 mt-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-stone-400">
            <li
              className="cursor-pointer hover:text-stone-700 transition"
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-stone-700 transition"
              onClick={() =>
                document
                  .getElementById("products-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Products
            </li>
            <li
              className="cursor-pointer hover:text-stone-700 transition"
              onClick={() =>
                document
                  .getElementById("reviews-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reviews
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl text-stone-800 font-bold ">GET IN TOUCH</h3>
          <p className="text-stone-400 mt-2 px-2">+91-123-456-7890</p>
          <p className="text-stone-400 px-2">contact@plainly.com</p>
        </div>
      </div>
      <div className="border-t border-stone-300 text-center py-4 text-sm text-stone-500 mt-2">
        Made using React + Tailwind - Plainly © 2026
      </div>
    </div>
  );
};

export default Footer;
