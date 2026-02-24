import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Empty_cart from "../assets/empty_cart.gif";
import Logo from "../assets/logo.png";
import Footer from "../Landing/Footer";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loadingItem, setLoadingItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://plainly-backend.onrender.com/users/cart", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCart(data.cart))
      .catch((err) => console.log(err));
  }, []);

  const incQty = async (productId, quantity) => {
    setLoadingItem(productId);
    const res = await fetch(
      "https://plainly-backend.onrender.com/users/cart/update",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: quantity + 1 }),
      },
    );
    const data = await res.json();
    setCart(data.cart);
    setLoadingItem(null);
  };

  const decQty = async (productId, quantity) => {
    if (quantity <= 1) return;
    setLoadingItem(productId);
    const res = await fetch(
      "https://plainly-backend.onrender.com/users/cart/update",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: quantity - 1 }),
      },
    );
    const data = await res.json();
    if (data.success) setCart(data.cart);
    setLoadingItem(null);
  };

  const [deleteId, setDeleteId] = useState(null);

  const handleRemove = async (productId) => {
    if (deleteId === productId) return;
    setDeleteId(productId);
    try {
      const res = await fetch(
        "https://plainly-backend.onrender.com/users/cart/remove",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId }),
        },
      );
      const data = await res.json();
      if (data.success) {
        setCart(data.cart);
        toast.success("Item removed!");
      } else {
        toast.error("Failed to remove item");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 ">
        <div className="bg-amber-50 shadow-sm border-b border-amber-100 px-10 py-3">
          <div className="flex items-center gap-1 group">
            <img
              src={Logo}
              alt="Plainly logo"
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />

            <h2
              className="font-bold text-3xl text-stone-700 group-hover:text-stone-900 transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Plainly
            </h2>
          </div>
        </div>
        <div className="px-10">
          <h2 className="text-3xl font-semibold mt-2 p-1">Cart Items</h2>
          {cart.length > 0 && (
            <div className="flex flex-col gap-y-5 p-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="w-3/4 border border-gray-300 bg-slate-200 shadow-sm hover:shadow-md p-4"
                >
                  <div className="flex flex-row items-center">
                    <img
                      src={`https://plainly-backend.onrender.com${item.product.image}`}
                      alt={item.product.name}
                      className="w-32 h-auto"
                    />
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col p-5">
                        <p className="text-lg font-semibold text-gray-700">
                          {item.product.name}
                        </p>
                        <p className="text-sm font-semibold text-black line-through">
                          Rs. {item.product.price}
                        </p>
                        <p className="text-xl font-semibold">
                          Rs{" "}
                          {(item.product.price -
                            (item.product.price * item.product.discount) /
                              100) *
                            item.quantity}
                        </p>
                        <div className="flex flex-row gap-x-5 mt-2">
                          <button
                            disabled={
                              item.quantity === 1 ||
                              loadingItem === item.product._id
                            }
                            className={`px-3 py-1 rounded font-bold flex items-center ${
                              item.quantity === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }`}
                            onClick={() =>
                              decQty(item.product._id, item.quantity)
                            }
                          >
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="px-3 py-1 bg-gray-200 rounded font-bold cursor-pointer"
                            onClick={() =>
                              incQty(item.product._id, item.quantity)
                            }
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <button
                        disabled={deleteId === item.product._id}
                        className={`mr-4 ${
                          deleteId === item.product._id
                            ? "text-red-300 cursor-not-allowed"
                            : "text-red-600 hover:text-red-800 cursor-pointer"
                        }`}
                        onClick={() => handleRemove(item.product._id)}
                      >
                        {deleteId === item.product._id ? (
                          "..."
                        ) : (
                          <MdDeleteForever size={24} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="ml-5 mt-2 p-4 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 w-[9%]"
                onClick={() => navigate("/buynow", { state: { cart } })}
              >
                Place Order
              </button>
            </div>
          )}
          {cart.length === 0 && (
            <div className="flex flex-col items-center p-5">
              <img src={Empty_cart} alt="empty_cart" className="h-110 w-auto" />
              <p className="mt-6 text-2xl text-gray-600">
                Your cart is <span className="text-red-400">empty!</span>
              </p>
              <button
                className="bg-red-500 p-3 mt-2 text-white rounded-md border border-gray-300 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Shop Items
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
