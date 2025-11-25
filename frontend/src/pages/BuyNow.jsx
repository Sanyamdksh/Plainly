import React from "react";

const BuyNow = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col p-10">
        <h2 className="font-semibold text-black text-4xl ">Shopping Cart</h2>
        <div className="flex flex-row gap-x-3 p-2">
          <a href="/products">Shop more items</a>
          <span>|</span>
          <a>Change Address</a>
        </div>
        <div className="w-[55%] bg-amber-50 rounded-md shadow-md border border-gray-300 p-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col ml-10">
              <p className="text-2xl">Hello, User</p>
              <p className="text-base text-gray-600">xyz@gmail.com</p>
            </div>
            <p className="mr-7 bg-stone-200 p-2 rounded-xl shadow-md border border-gray-300">
              Change
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
