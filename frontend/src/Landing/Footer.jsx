import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="p-5 bg-stone-100">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center">
            <img src={Logo} alt="Plainly logo" className="h-10 w-auto mr-2" />
            <h2 className="font-bold text-3xl text-stone-700">Plainly</h2>
          </div>
          <h2 className="text-stone-600 text-md">
            Bring home the beauty of Simple Living
          </h2>
        </div>
        <div>
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
      </div>
      <div className="border-t border-stone-300 text-center py-4 text-sm text-stone-500 mt-2">
        Made using React + Tailwind - Plainly © 2026
      </div>
    </div>
  );
};

export default Footer;
