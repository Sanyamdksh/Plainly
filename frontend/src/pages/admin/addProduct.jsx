import React, { useEffect } from "react";
import Dashboard from "./dashboard";
import { toast } from "react-toastify";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discount: "",
    image: null,
    bgcolor: "#ffffff",
  });

  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const isEdit = Boolean(productId);

  useEffect(() => {
    if (!isEdit) return;
    fetch(`https://plainly-backend.onrender.com/products/${productId}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          name: data.product.name,
          price: data.product.price,
          discount: data.product.discount,
          bgcolor: data.product.bgcolor,
          image: null,
        });
      })
      .catch(() => toast.error("Failed to load product"));
  }, [isEdit, productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData creates a virtual form that holds all the data to be sent to the backend
    if (submitting) return;
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("discount", product.discount);
    formData.append("bgcolor", product.bgcolor);

    if (product.image) formData.append("image", product.image);

    try {
      let res = await fetch(
        isEdit
          ? `https://plainly-backend.onrender.com/products/${productId}`
          : "https://plainly-backend.onrender.com/products/create",
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
          credentials: "include",
        },
      );
      if (res.ok) {
        toast.success(
          isEdit
            ? "Product updated successfully"
            : "Product created successfully",
        );
        if (!isEdit) {
          setProduct({
            name: "",
            price: "",
            discount: "",
            bgcolor: "#ffffff",
            image: null,
          });
        }
      } else {
        toast.error("Failed to create product");
      }
    } catch (err) {
      toast.error("something went wrong");
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dashboard>
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-stone-700 mb-6">
            {isEdit ? "Edit Product" : "Add new product"}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="w-full border p-3 rounded-md"
              value={product.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full border p-3 rounded-md"
              value={product.price}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="discount"
              placeholder="Discount"
              className="w-full border p-3 rounded-md"
              value={product.discount}
              onChange={handleChange}
            />

            <div className="flex justify-between">
              <label className="flex flex-col items-center">
                <span className="text-sm font-medium text-stone-600">
                  Background Color
                </span>
                <input
                  type="color"
                  className="w-16 h-10 cursor-pointer"
                  name="bgcolor"
                  value={product.bgcolor}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className="font-semibold text-stone-700 p-1">
              Upload Product image
            </label>
            <input
              type="file"
              className="w-full bg-stone-100 p-3 border rounded-lg flex justify-between mt-2 cursor-pointer"
              onChange={handleImageChange}
              accept="image/*"
              required={!isEdit}
            />
            <button
              disabled={submitting}
              className={`w-ful text-white py-3 rounded-lg ${submitting ? "bg-stone-400 cursor-not-allowed" : " bg-stone-800 hover:bg-stone-900 cursor-pointer"}`}
              type="submit"
            >
              {submitting
                ? isEdit
                  ? "Saving..."
                  : "Adding..."
                : isEdit
                  ? "Save changes"
                  : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddProduct;
