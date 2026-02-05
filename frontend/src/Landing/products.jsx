import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Products = ({ scrollToSection = false, variant = "store" }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const isAdmin = variant === "admin";

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:3000/products/all", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error(err));
  }, []);

  // Scroll helper (store only)
  useEffect(() => {
    if (!isAdmin && scrollToSection) {
      const el = document.getElementById("products-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection, isAdmin]);

  const addToCart = async (productId) => {
    await fetch("http://localhost:3000/users/cart/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    toast.success("Added to cart!");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this product?");
    if (!confirmDelete) return;
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      toast.success("Product deleted successfully");

      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      toast.error("Failed to delete the product");
    }
  };

  return (
    <div
      id="products-section"
      className={`${isAdmin ? "w-full" : "min-h-screen"} bg-white`}
    >
      <div className={`${isAdmin ? "p-2" : "p-8"}`}>
        {/* Store Header */}
        {!isAdmin && (
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-[#2C2C2C] mb-4">
              Explore Our Wide Range of Products
            </h2>
            <p className="text-lg text-stone-800 max-w-2xl">
              Discover items that combine elegance, functionality, and
              sustainability thoughtfully designed to complement your lifestyle.
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div
          className={`grid gap-6 ${
            isAdmin
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {products.map((item) => (
            <div
              key={item._id}
              className={`transition ${
                isAdmin
                  ? "bg-white border border-gray-200 rounded-xl shadow-sm p-5"
                  : "bg-stone-100 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg p-6"
              }`}
            >
              {/* Image */}
              <div
                className={`flex items-center justify-center overflow-hidden ${
                  isAdmin ? "h-40 rounded-lg bg-gray-50" : "h-60 rounded-xl"
                }`}
                style={!isAdmin ? { backgroundColor: item.bgcolor } : {}}
              >
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.name}
                  className={`object-cover ${
                    isAdmin ? "h-38 w-38" : "h-60 w-60 shadow-md"
                  }`}
                />
              </div>

              {/* Details */}
              <h3 className="text-lg font-semibold mt-4 text-gray-700">
                {item.name}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm font-semibold text-black line-through">
                  Rs. {item.price}
                </p>
                <p className="text-xs font-semibold text-yellow-700">
                  {item.discount}% off
                </p>
              </div>

              <p className="text-lg font-semibold text-black mt-1">
                Rs. {item.price - (item.price * item.discount) / 100}
              </p>

              {/* Actions */}
              <div className="mt-4">
                {!isAdmin && (
                  <button
                    className="bg-gray-400 text-white font-medium py-2 rounded-lg w-full hover:bg-red-500 transition cursor-pointer"
                    onClick={() => addToCart(item._id)}
                  >
                    Add to Cart
                  </button>
                )}

                {isAdmin && (
                  <div className="flex justify-end gap-4 text-sm">
                    <button
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={() =>
                        navigate(`/owner/add-product?id=${item._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline cursor-pointer"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
