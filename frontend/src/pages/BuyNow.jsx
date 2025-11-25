import React from "react";

const BuyNow = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col p-10">
        <h2 className="font-semibold text-black text-4xl ">Shopping Cart</h2>
        <div className="flex flex-row gap-x-3 p-2">
          <a>Shop more items</a>
          <span>|</span>
          <a>Change Address</a>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
