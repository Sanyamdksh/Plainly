import React from "react";
import Dashboard from "./dashboard";
import Products from "../../Landing/products";

const ManageProduct = () => {
  return (
    <Dashboard>
      <div>
        <Products variant="admin" />
      </div>
    </Dashboard>
  );
};

export default ManageProduct;
