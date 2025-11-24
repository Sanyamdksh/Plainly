import React, { useEffect, useState } from "react";

const Products = (scrollToSection) => {
  // const products = [
  //   {
  //     _id: 1,
  //     name: "Sample Product",
  //     price: 300,
  //     discount: 10,
  //     bgcolor: "#FFF37A",
  //     panelcolor: "#FFFFFF",
  //     textcolor: "#2C2C2C",
  //     image: null,
  //   },
  //   {
  //     _id: 2,
  //     name: "Elegant Lamp",
  //     price: 499,
  //     discount: 0,
  //     bgcolor: "#FFDCDC",
  //     panelcolor: "#FAFAFA",
  //     textcolor: "#4A4A4A",
  //     image: null,
  //   },
  //   {
  //     _id: 3,
  //     name: "Wooden Vase",
  //     price: 799,
  //     discount: 5,
  //     bgcolor: "#E3FFDC",
  //     panelcolor: "#FFFFFF",
  //     textcolor: "#333333",
  //     image: null,
  //   },
  //   {
  //     _id: 4,
  //     name: "Ceramic Pot",
  //     price: 250,
  //     discount: 0,
  //     bgcolor: "#EDE3FF",
  //     panelcolor: "#FDFDFD",
  //     textcolor: "#222222",
  //     image: null,
  //   },
  // ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/all", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    if (scrollToSection) {
      const el = document.getElementById("products-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection]);

  return (
    <div id="products-section" className="min-h-screen w-full bg-[#F9F5E7]">
      <div className="p-8">
        <h2 className="text-4xl font-semibold text-[#2C2C2C] mb-6">
          Explore Our Wide Range of Products
        </h2>
        <p className="text-lg text-stone-800 max-w-2xl">
          Discover items that combine elegance, functionality, and
          sustainability all designed to complement your lifestyle.
        </p>

        <div className="grid grid-cols-3 mt-10 gap-6">
          {products.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: item.panelcolor }}
            >
              <div
                className="h-48 w-full rounded-xl shadow-sm flex items-center justify-center"
                style={{ backgroundColor: item.bgcolor }}
              >
                <img
                  src={`data:image/jpeg;base64,${item.image}`}
                  className="h-32 w-32 object-cover rounded-lg shadow-sm border border-white"
                  alt={item.name}
                />
              </div>

              <h3
                className="text-xl font-semibold mt-4"
                style={{ color: item.textcolor }}
              >
                {item.name}
              </h3>
              <p
                className="text-lg font-bold"
                style={{ color: item.textcolor }}
              >
                Rs. {item.price}
              </p>
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
