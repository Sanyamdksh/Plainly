import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Footer from "../Landing/Footer";
const OrderHist = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://plainly-backend.onrender.com/users/orders", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  return (
    <>
      <div className="bg-stone-200 min-h-screen pb-2">
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
          <h2 className="text-3xl font-semibold text-stone-800  p-2">
            My Orders
          </h2>
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-stone-100 p-5 rounded-lg shadow-sm hover:shadow-md w-[75%] mt-2 border border-gray-300 ml-2 mb-5"
            >
              <p className="text-xl font-bold"># {order._id.slice(-6)}</p>
              <p className="text-lg font-semibold">
                Order Placed on: {new Date(order.placedAt).toDateString()}
              </p>
              {order.address && (
                <p className="text-gray-700 mt-2">
                  {order.address.line1}, {order.address.city},{" "}
                  {order.address.state} - {order.address.zip}
                </p>
              )}
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Items:</h3>
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg shadow-sm w-[75%] border border-gray-200 mb-5 p-2 bg-stone-100"
                  >
                    <div className="flex flex-row">
                      <img
                        src={`https://plainly-backend.onrender.com${item.image}`}
                        alt={item.name}
                        className="w-28 h-auto"
                      />
                      <div className="flex flex-col justify-center p-4">
                        <p className="text-lg text-gray-700">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-lg font-semibold">
                          Rs{" "}
                          {Math.round(
                            (item?.price || 0) *
                              (1 - (item?.discount || 0) / 100) *
                              item.quantity,
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-x-7">
                <p className="text-lg font-semibold">
                  Total Amount: {order.amount}
                </p>
                <span>|</span>
                <p className="text-lg font-semibold">Status: Placed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderHist;
