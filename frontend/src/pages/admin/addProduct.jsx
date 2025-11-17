import React, { useState } from "react";
import Dashboard from "./dashboard";
const AddProduct = () => {
  // const [product, setProduct] = useState({
  //   name: "",
  //   price: "",
  //   discount: 0,
  //   bgcolor: "#ffffff",
  //   panelcolour: "#ffffff",
  //   textcolor: "#000000",
  //   image: null,
  // });

  return (
    <Dashboard>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-stone-700 mb-6">
          Add new product
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg space-y-5">
          <input
            type="text"
            placeholder="Product name"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Discount"
            className="w-full border p-3 rounded-md"
          />

          <div className="flex gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-stone-600">Background Color</span>
              <input type="color" className="w-16 h-10" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-stone-600">Panel Color</span>
              <input type="color" className="w-16 h-10" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-stone-600">Text Color</span>
              <input type="color" className="w-16 h-10" />
            </label>
          </div>
          <input
            type="file"
            className="w-full bg-stone-100 p-3 border rounded-lg"
          />

          <button className="w-full bg-stone-800 text-white py-3 rounded-lg hover:bg-stone-900">
            Add Product
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddProduct;
