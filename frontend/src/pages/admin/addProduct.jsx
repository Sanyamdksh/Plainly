import React from "react";
import Dashboard from "./dashboard";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discount: 0,
    bgcolor: "#ffffff",
    panelcolour: "#ffffff",
    textcolor: "#000000",
    image: null,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData creates a virtual form that holds all the data to be sent to the backend
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("discount", product.discount);
    formData.append("bgcolor", product.bgcolor);
    formData.append("panelcolor", product.panelcolor);
    formData.append("textcolor", product.textcolor);
    formData.append("image", product.image);

    try {
      let res = await fetch("http://localhost:3000/products/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (res.ok) {
        toast.success("Product created successfully");
        setTimeout(() => {
          window.location.href = "/products";
        }, 1500);
      } else {
        toast.error("Failed to create product");
      }
    } catch (err) {
      toast.error("something went wrong");
      console.log(err);
    }
  };

  return (
    <Dashboard>
      <form onSubmit={handleSubmit}>
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

            <div className="flex justify-between">
              <label className="flex flex-col items-center">
                <span className="text-sm font-medium text-stone-600">
                  Background Color
                </span>
                <input type="color" className="w-16 h-10 cursor-pointer" />
              </label>

              <label className="flex flex-col items-center">
                <span className="text-sm font-medium text-stone-600">
                  Panel Color
                </span>
                <input type="color" className="w-16 h-10 cursor-pointer" />
              </label>

              <label className="flex flex-col items-center">
                <span className="text-sm font-medium text-stone-600">
                  Text Color
                </span>
                <input type="color" className="w-16 h-10 cursor-pointer" />
              </label>
            </div>
            <label className="font-semibold text-stone-700 p-1">
              Upload Product image
            </label>
            <input
              type="file"
              className="w-full bg-stone-100 p-3 border rounded-lg flex justify-between mt-2"
            />
            <button className="w-full bg-stone-800 text-white py-3 rounded-lg hover:bg-stone-900">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddProduct;
