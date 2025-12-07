import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Products = ({ scrollToSection }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (productId) => {
    await fetch("http://localhost:3000/users/cart/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    toast.success("Added to cart!");
  };

  useEffect(() => {
    fetch("http://localhost:3000/products/all", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (scrollToSection) {
      const el = document.getElementById("products-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection]);

  return (
    <div id="products-section" className="min-h-screen w-full bg-white">
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
              key={item._id}
              className="rounded-2xl p-6 shadow-md hover:shadow-lg transition-all bg-stone-100 border border-gray-300"
            >
              <div
                className="h-48 w-full rounded-xl shadow-sm flex items-end justify-center"
                style={{ backgroundColor: item.bgcolor }}
              >
                <img
                  src={`http://localhost:3000${item.image}`}
                  className="h-48 w-48 object-cover shadow-md "
                  alt={item.name}
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 text-gray-700">
                {item.name}
              </h3>
              <p className="text-lg font-semibold text-black">
                Rs. {item.price}
              </p>
              <div className="flex flex-col items-center mt-5 gap-3">
                <button
                  className="bg-red-400 text-white font-medium py-2 rounded-lg w-3/4 hover:bg-red-500 transition cursor-pointer"
                  onClick={() =>
                    navigate("/buynow", { state: { product: item } })
                  }
                >
                  Buy Now
                </button>
                <button
                  className="bg-gray-400 text-white font-medium py-2 rounded-lg w-3/4 hover:bg-red-500 transition cursor-pointer"
                  onClick={() => addToCart(item._id)}
                >
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
