import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../Landing/Footer";
import Logo from "../assets/logo.png";
const BuyNow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState({
    fullname: "User",
    email: "xyz@gmail.com",
    address: null,
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(
        "https://plainly-backend.onrender.com/users/cart",
        {
          credentials: "include",
        },
      );
      const data = await res.json();
      if (!data.cart || data.cart.length === 0) {
        navigate("/");
        return;
      }
      setCart(data.cart);
      setLoading(false);
    };
    fetchCart();
  }, []);

  useEffect(() => {
    fetch("https://plainly-backend.onrender.com/users/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!loading && !user.address) {
      setShowForm(true);
    }
  }, [loading, user.address]);

  const [formData, setFormData] = useState({
    contact: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  });

  // const updateForm = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleAddress = async () => {
    try {
      const res = await axios.post(
        "https://plainly-backend.onrender.com/users/save-add",
        formData,
        {
          withCredentials: true,
        },
      );
      setUser((prev) => ({
        ...prev,
        address: formData,
      }));
      setShowForm(false);
      toast.success("Address Saved");
    } catch (err) {
      console.error(err);
      toast.success("Error");
    }
  };

  const handleOrder = async () => {
    if (!user.address) {
      toast.error("Please add address before placing an order");
      return;
    }

    const res = await fetch(
      "https://plainly-backend.onrender.com/users/place-order",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: user.address,
        }),
      },
    );

    const data = await res.json();
    if (data.success) {
      toast.success("Order Placed");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Order Failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    { label: "Contact", name: "contact", type: "tel", width: "w-[40%]" },
    { label: "Address Line 1", name: "line1", type: "text", width: "w-[80%]" },
    { label: "Address Line 2", name: "line2", type: "text", width: "w-[80%]" },
    { label: "City", name: "city", type: "text", width: "w-[50%]" },
  ];

  const TotalPrice = cart.reduce(
    (sum, item) =>
      sum +
      (item.product.price -
        (item.product.price * (item.product.discount || 0)) / 100) *
        item.quantity,
    0,
  );

  return (
    <>
      <div className="min-h-screen bg-zinc-50">
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
        <div className="max-w-7xl mx-auto px-8 py-10">
          <h2 className="font-semibold text-black text-4xl ">Checkout</h2>
          <div className="flex flex-row gap-8 py-7 px-12">
            <div className="w-full flex flex-col">
              <div className="w-[75%] bg-zinc-50 rounded-md shadow-md border border-zinc-400 p-2">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col ml-10">
                    <p className="font-semibold text-2xl">
                      Hello, {user.fullname}
                    </p>
                    <p className="text-base text-gray-600">{user.email}</p>
                  </div>
                </div>
              </div>
              <div className="w-[75%] bg-zinc-50 rounded-md shadow-md border border-zinc-400 p-3 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="font-semibold text-black text-2xl ml-10">
                    Address Details
                  </h2>
                  <button
                    className="mr-5 p-2 bg-white rounded-md shadow-md px-3 border border-zinc-400 cursor-pointer hover:bg-zinc-100 transition"
                    onClick={() => setShowForm(true)}
                  >
                    {user.address ? "Change" : "Add"}
                  </button>
                </div>
                {user.address && !showForm && (
                  <div className="mt-4 ml-10 text-gray-700 space-y-0.5">
                    <p>{user.address.line1}</p>
                    <p>{user.address.line2}</p>
                    <p>
                      {user.address.city},{user.address.state}-{" "}
                      {user.address.zip}
                    </p>
                    <p>Contact: {user.address.contact}</p>
                  </div>
                )}
                {showForm && (
                  <form className="flex flex-col gap-y-4 mx-10">
                    {fields.map((field) => (
                      <div key={field.name} className="flex flex-col">
                        <label className="text-sm text-gray-700">
                          {field.label}
                        </label>
                        <input
                          name={field.name}
                          type={field.type}
                          placeholder={field.label}
                          className={`bg-white border border-gray-500 p-2 rounded ${field.width}`}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                    <div className="flex gap-x-4">
                      {["state", "zip"].map((field) => (
                        <div key={field} className="flex flex-col w-[40%]">
                          <label className="text-sm text-gray-700 capitalize">
                            {field === "zip" ? "Zip Code" : "State"}
                          </label>
                          <input
                            name={field}
                            type="text"
                            placeholder={field === "zip" ? "Zip Code" : "State"}
                            className="bg-white border border-gray-500 p-2 rounded"
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="bg-stone-700 text-white px-4 py-2 w-[40%] rounded-lg hover:bg-stone-800 transition"
                      onClick={handleAddress}
                    >
                      Save Address
                    </button>
                  </form>
                )}
              </div>
              <div className="w-[75%] bg-zinc-50 rounded-md shadow-md border border-zinc-400 p-4 mt-6">
                <div className="ml-10">
                  <h2 className="font-semibold text-black text-2xl">
                    Payment Method
                  </h2>

                  <div className="flex items-center gap-3 mt-4">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="COD"
                      defaultChecked
                      className="w-5 h-5"
                    />
                    <label htmlFor="cod" className="text-lg text-gray-700">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <button
                    className={
                      !user.address
                        ? "mt-6 bg-stone-600 text-white px-7 py-3 rounded-lg cursor-not-allowed"
                        : "mt-6 bg-stone-700 text-white px-7 py-3 rounded-lg hover:bg-stone-900 transition cursor-pointer"
                    }
                    onClick={!user.address ? "" : handleOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[60%] bg-white rounded-md shadow-md border p-5 h-fit">
              <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
              {cart.map((item) => (
                <div className="flex flex-col mt-2 rounded-md border border-stone-200 shadow-sm p-2">
                  <div className="flex flex-row justify-between">
                    <div
                      key={item.product._id}
                      className="flex flex-col justify-center "
                    >
                      <p className="text-lg font-medium">{item.product.name}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>
                        ₹
                        {(item.product.price -
                          (item.product.price * item.product.discount) / 100) *
                          item.quantity}
                      </p>
                    </div>
                    <img
                      src={`https://plainly-backend.onrender.com${item.product.image}`}
                      alt={item.product.name}
                      className="w-24 h-24 mr-10"
                    />
                  </div>
                </div>
              ))}
              <hr className="my-3" />
              <p className="font-semibold text-xl">Total: ₹{TotalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyNow;
