import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "User",
    email: "xyz@gmail.com",
    address: null,
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!user.address) setShowForm(true);
  }, [user.address]);

  useEffect(() => {
    fetch("http://localhost:3000/users/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  const [formData, setFormData] = useState({
    contact: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleAddress = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        formData,
        {
          withCredentials: true,
        }
      );
      setUser({
        ...user,
        address: formData,
      });
      setShowForm(false);
      toast.success("Address Saved");
    } catch (err) {
      console.error(err);
      toast.success("Error");
    }
  };

  const handleOrder = () => {
    toast.success("Order Placed");
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

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
              <p className="text-2xl">Hello, {user.fullname}</p>
              <p className="text-base text-gray-600">{user.email}</p>
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
            <button
              className="mr-5 bg-stone-200 p-2 rounded-xl shadow-md border border-gray-300 cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              {user.address ? "Change Address" : "Add Address"}
            </button>
          </div>
          {user.address && !showForm && (
            <div className="mt-4 ml-10 text-gray-700 space-y-0.5">
              <p>{user.address.line1}</p>
              <p>{user.address.line2}</p>
              <p>
                {user.address.city},{user.address.state}- {user.address.zip}
              </p>
              <p>Contact: {user.address.contact}</p>
            </div>
          )}
        </div>
        {showForm && (
          <div className="w-[40%] bg-gray-200 rounded-md shadow-md border border-gray-300 p-3 mt-5">
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <label htmlFor="contact" className="text-sm text-gray-700">
                  Contact
                </label>
                <input
                  id="contact"
                  type="number"
                  placeholder="Contact Number"
                  className="bg-white border border-gray-500 p-2 rounded w-[40%]"
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, line1: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, line2: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
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
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-stone-700 text-white px-4 py-2 w-[40%] rounded-lg hover:bg-stone-800"
                onClick={handleAddress}
              >
                Save Address
              </button>
            </form>
          </div>
        )}
        <div className="w-[55%] bg-amber-50 rounded-md shadow-md border border-gray-300 p-4 mt-6">
          <h2 className="font-semibold text-black text-2xl ml-4">
            Payment Method
          </h2>

          <div className="flex items-center gap-3 ml-6 mt-4">
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
            className="mt-6 ml-4 bg-stone-700 text-white px-7 py-3 rounded-lg hover:bg-stone-900 transition cursor-pointer"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
