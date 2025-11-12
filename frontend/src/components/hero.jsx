import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const hero = () => {
  return (
    <div className="min-h-screen w-full bg-amber-100">
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
        <div className="flex gap-x-6 text-xl text-stone-700">
          <RiShoppingCart2Line className="cursor-pointer hover:text-stone-900 hover:scale-125 transition-transform duration-200" />
          <CgProfile className="cursor-pointer hover:text-stone-900 hover:scale-125 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
};

export default hero;
