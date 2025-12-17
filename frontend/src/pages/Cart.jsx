import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loadingItem, setLoadingItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users/cart", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCart(data.cart))
      .catch((err) => console.log(err));
  }, []);

  const incQty = async (productId, quantity) => {
    setLoadingItem(productId);
    const res = await fetch("http://localhost:3000/users/cart/update", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: quantity + 1 }),
    });
    const data = await res.json();
    setCart(data.cart);
    setLoadingItem(null);
  };

  const decQty = async (productId, quantity) => {
    if (quantity <= 1) return;
    setLoadingItem(productId);
    const res = await fetch("http://localhost:3000/users/cart/update", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: quantity - 1 }),
    });
    const data = await res.json();
    if (data.success) setCart(data.cart);
    setLoadingItem(null);
  };

  const handleRemove = async (productId) => {
    setLoadingItem(productId);
    const res = await fetch("http://localhost:3000/users/cart/remove", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    const data = await res.json();
    if (data.success) setCart(data.cart);
    setLoadingItem(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h2 className="text-4xl font-semibold">Cart Items</h2>
      <div className="flex flex-col gap-y-5 p-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="w-3/4 border border-gray-300 bg-slate-200 shadow-sm hover:shadow-md p-4"
          >
            <div className="flex flex-row items-center">
              <img
                src={`http://localhost:3000${item.product.image}`}
                alt={item.product.name}
                className="w-32 h-auto"
              />
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col p-5">
                  <p className="text-lg font-semibold text-gray-700">
                    {item.product.name}
                  </p>
                  <p className="text-xl font-semibold">
                    Rs {item.product.price}
                  </p>
                  <div className="flex flex-row gap-x-5 mt-2">
                    <button
                      disabled={
                        item.quantity === 1 || loadingItem === item.product._id
                      }
                      className={`px-3 py-1 rounded font-bold flex items-center ${
                        item.quantity === 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                      }`}
                      onClick={() => decQty(item.product._id, item.quantity)}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded font-bold cursor-pointer"
                      onClick={() => incQty(item.product._id, item.quantity)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-600 mr-4 hover:text-red-800 cursor-pointer"
                  onClick={() => handleRemove(item.product._id)}
                >
                  <MdDeleteForever size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
