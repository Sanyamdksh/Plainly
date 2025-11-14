import React from "react";

const Products = () => {
  return (
    <div className="min-h-screen w-full bg-[#F9F5E7]">
      <div className="p-8">
        <h2 className="text-4xl font-semibold text-[#2C2C2C] mb-6">
          Explore Our Wide Range of Products
        </h2>
        <p className="text-lg text-stone-800 max-w-2xl">
          Discover items that combine elegance, functionality, and
          sustainability all designed to complement your lifestyle.
        </p>

        <div className="grid grid-cols-3 mt-10 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="h-48 w-auto bg-[#FFF37A] rounded-xl shadow-sm"></div>
              <h3 className="text-xl font-medium text-stone-700 mt-2">
                Product {item}
              </h3>
              <p className="font-bold text-stone-900">Rs. 300</p>
              <div className="flex flex-col items-center mt-5 gap-3">
                <button className="bg-red-400 text-white font-medium py-2 rounded-lg w-3/4 hover:bg-red-500 transition">
                  Buy Now
                </button>
                <button className="bg-stone-200 py-2 rounded-lg w-3/4 hover:bg-stone-300 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
