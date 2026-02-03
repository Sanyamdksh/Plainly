import React from "react";
import Dashboard from "./dashboard";
import Products from "../../components/products";
const DashLayout = () => {
  return (
    <Dashboard>
      <h1 className="text-3xl font-bold text-stone-700">Welcome!</h1>
      <p className="text-stone-600 mt-3">Manage your products from here</p>
      <div></div>
    </Dashboard>
  );
};

export default DashLayout;
