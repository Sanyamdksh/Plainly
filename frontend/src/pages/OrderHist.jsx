import React, { useEffect, useState } from "react";

const OrderHist = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/place-order", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  });

  return (
    <div className="bg-stone-200 min-h-screen p-10">
      <h2 className="text-3xl font-semibold text-stone-800 mb-5">My Orders</h2>
      {/* {orders.map((order) => ( */}
      <div className="bg-stone-100 p-5 rounded-lg shadow-sm w-[60%]">
        <p className="text-xl font-bold">#orderId</p>
        <p className="text-lg font-semibold">
          Order Placed on: {new Date(Date.now()).toDateString()}
        </p>
        <div className="flex flex-row gap-x-2">
          <p>Total Amount: ₹200</p>
          <span>|</span>
          <p>Status: Placed</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Items:</h3>
          {/* {orders.items.map((item, index) => ( */}
          <p>Wooden lamp</p>
          {/* ))} */}
        </div>
      </div>
      {/*    ))} */}
    </div>
  );
};

export default OrderHist;
