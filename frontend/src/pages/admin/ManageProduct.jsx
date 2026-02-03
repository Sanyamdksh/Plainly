import React from "react";
import Dashboard from "./dashboard";
import Products from "../../components/products";

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
