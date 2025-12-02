import React, { useEffect, useState } from "react";

const OrderHist = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/place-order", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  });

  return (
    <div className="bg-stone-200 min-h-screen p-15">
      <h2 className="text-3xl font-semibold text-stone-800 mb-5">My Orders</h2>
      {/* {orders.map((order) => ( */}
      <div className="bg-stone-100 p-5 rounded-lg shadow-sm w-[75%]">
        <p className="text-xl font-bold">#orderId</p>
        <p className="text-lg font-semibold">
          Order Placed on: {new Date(Date.now()).toDateString()}
        </p>
        <p>Address</p>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Items:</h3>
          {/* {orders.items.map((item, index) => ( */}
          <div className="bg-stone-100 rounded-lg shadow-sm w-[75%] border border-gray-200 mb-5">
            <div className="flex flex-row">
              <img
                src="https://exclusivelane.com/cdn/shop/products/el-003-061-_a.jpg?v=1740474777"
                alt="img"
                className="w-28 h-auto"
              />
              <div className="flex flex-col justify-center p-4">
                <p className="text-lg text-gray-700">Wooden lamp</p>
                <p className="text-lg font-semibold">Rs 450</p>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
        <div className="flex flex-row gap-x-7">
          <p className="text-lg font-semibold">Total Amount: ₹200</p>
          <span>|</span>
          <p className="text-lg font-semibold">Status: Placed</p>
        </div>
      </div>
      {/*    ))} */}
    </div>
  );
};

export default OrderHist;
