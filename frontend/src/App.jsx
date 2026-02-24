import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/signup";
import Landing from "./Landing/hero";
import Products from "./Landing/products";
import AuthContainer from "./pages/AuthContainer";
import DashLayout from "./pages/admin/dashLayout";
import AddProduct from "./pages/admin/addProduct";
import BuyNow from "./pages/BuyNow";
import Order from "./pages/OrderHist";
import Cart from "./pages/Cart";
import AccessDenied from "./pages/admin/AccessDenied";
import AdminRoute from "./utils/AdminRoute";
import ManageProduct from "./pages/admin/ManageProduct";
import Reviews from "./Landing/reviews";
import Footer from "./Landing/Footer";
import axios from "axios";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  const { user, loading } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthContainer />} />
        <Route
          path="/"
          element={
            loading ? (
              <p className="text-center mt-20 text-xl">Loading...</p>
            ) : (
              <>
                <Landing />
                <Products />
                <Reviews />
                <Footer />
              </>
            )
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/order-hist" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/access-denied" element={<AccessDenied />} />
        {/* <Route element={<AdminRoute user={user} loading={loading} />}> */}
        <Route path="/owner/dashboard" element={<DashLayout />} />
        <Route path="/owner/add-product" element={<AddProduct />} />
        <Route path="/owner/manage-products" element={<ManageProduct />} />
        {/* </Route> */}
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Router>
  );
}

export default App;
