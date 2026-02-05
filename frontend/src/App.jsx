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

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route
          path="/home"
          element={
            <>
              <Landing />
              {user?.role == "user" && <Products />}
              {user?.role == "user" && <Reviews />}
            </>
          }
        />
        {/* <Route
          path="/products"
          element={
            <>
              <Landing />
              <Products scrollToSection />
            </>
          }
        /> */}
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/order-hist" element={<Order />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/access-denied" element={<AccessDenied />} />
        <Route element={<AdminRoute user={user} loading={loading} />}>
          <Route path="/owner/dashboard" element={<DashLayout />} />
          <Route path="/owner/add-product" element={<AddProduct />} />
          <Route path="/owner/manage-products" element={<ManageProduct />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Router>
  );
}

export default App;
