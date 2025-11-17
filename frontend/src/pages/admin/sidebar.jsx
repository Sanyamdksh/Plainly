import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-stone-800 text-white p-6 flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Owner</h2>
      <Link className="hover:text-stone-300 text-lg" to="/owner/dashboard">
        Dashboard
      </Link>
      <Link className="hover:text-stone-300 text-lg" to="/owner/add-product">
        Add Product
      </Link>
      <Link
        className="hover:text-stone-300 text-lg"
        to="/owner/manage-products"
      >
        Manage Products
      </Link>

      <Link className="mt-auto text-red-400 hover:text-red-500" to="/">
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
