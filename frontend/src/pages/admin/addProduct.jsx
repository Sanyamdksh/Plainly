import React, { useState } from "react";

const addProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discount: 0,
    bgcolor: "#ffffff",
    panelcolour: "#ffffff",
    textcolor: "#000000",
    image: null,
  });

  return <div></div>;
};

export default addProduct;
