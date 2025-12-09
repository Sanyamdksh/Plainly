import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/cart", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h2 className="text-4xl font-semibold">Cart Items</h2>
      <div className="flex flex-col gap-y-5 p-4">
        <div className="w-3/4 border border-gray-300 shadow-sm hover:shadow-md p-4">
          <div className="flex flex-row items-center">
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?crop=1%3A1%2Csmart&w=1000"
              alt="image"
              className="w-32 h-auto"
            />
            <div className="flex flex-col p-5">
              <p className="text-lg font-semibold text-gray-700">Name</p>
              <p className="text-xl font-semibold">800</p>
              <div className="flex flex-row gap-x-5 mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded font-bold">
                  <FaMinus />
                </button>
                <span>Quantity</span>
                <button className="px-3 py-1 bg-gray-200 rounded font-bold">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
