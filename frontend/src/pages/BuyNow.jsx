import React from "react";

const BuyNow = () => {
  return (
    <div className="min-h-screen bg-slate-100">
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
            <button className="mr-7 bg-stone-200 p-2 rounded-xl shadow-md border border-gray-300 cursor-pointer">
              Change
            </button>
          </div>
        </div>
        <div className="w-[55%] bg-amber-50 rounded-md shadow-md border border-gray-300 p-3 mt-4">
          <div className="flex flex-row items-center justify-between">
            <h2 className="font-semibold text-black text-2xl ml-9">
              Address Details
            </h2>
            <button className="mr-5 bg-stone-200 p-2 rounded-xl shadow-md border border-gray-300 cursor-pointer">
              Add Address
            </button>
          </div>
        </div>
        <div className="w-[40%] bg-gray-200 rounded-md shadow-md border border-gray-300 p-3 mt-5">
          <form className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="bg-white border border-gray-500 p-2 rounded w-[40%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact" className="text-sm text-gray-700">
                Contact
              </label>
              <input
                id="contact"
                type="number"
                placeholder="Contact Number"
                className="bg-white border border-gray-500 p-2 rounded w-[40%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address1" className="text-sm text-gray-700">
                Address Line 1
              </label>
              <input
                id="address1"
                type="text"
                placeholder="Address Line 1"
                className="bg-white border border-gray-500 p-2 rounded w-[80%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address2" className="text-sm text-gray-700">
                Address Line 2
              </label>
              <input
                id="address2"
                type="text"
                placeholder="Address Line 2"
                className="bg-white border border-gray-500 p-2 rounded w-[80%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm text-gray-700">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="City"
                className="bg-white border border-gray-500 p-2 rounded w-[50%]"
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="flex flex-col w-[40%]">
                <label htmlFor="state" className="text-sm text-gray-700">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="State"
                  className="bg-white border border-gray-500 p-2 rounded"
                />
              </div>

              <div className="flex flex-col w-[40%]">
                <label htmlFor="zip" className="text-sm text-gray-700">
                  Zip Code
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="Zip Code"
                  className="bg-white border border-gray-500 p-2 rounded"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
