import React, { useEffect, useState } from "react";

const OrderHist = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/orders", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  return (
    <div className="bg-stone-200 min-h-screen p-15">
      <h2 className="text-3xl font-semibold text-stone-800 mb-5">My Orders</h2>
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-stone-100 p-5 rounded-lg shadow-sm hover:shadow-md w-[75%] mt-4 border border-gray-300 "
        >
          <p className="text-xl font-bold"># {order._id.slice(-6)}</p>
          <p className="text-lg font-semibold">
            Order Placed on: {new Date(order.placedAt).toDateString()}
          </p>
          {order.address && (
            <p className="text-gray-700 mt-2">
              {order.address.line1}, {order.address.city}, {order.address.state}{" "}
              - {order.address.zip}
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
                    src={`http://localhost:3000${item.product.image}`}
                    alt={item.product.name}
                    className="w-28 h-auto"
                  />
                  <div className="flex flex-col justify-center p-4">
                    <p className="text-lg text-gray-700">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-lg font-semibold">
                      Rs {(item.product?.price || 0) * item.quantity}
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
  );
};

export default OrderHist;
