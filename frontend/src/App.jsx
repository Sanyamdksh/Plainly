import Signup from "./pages/signup";
import Landing from "./components/hero";
import Products from "./components/products";
import AuthContainer from "./pages/AuthContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from "./pages/admin/dashLayout";
import AddProduct from "./pages/admin/addProduct";
import BuyNow from "./pages/BuyNow";
import Order from "./pages/OrderHist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route
          path="/home"
          element={
            <>
              <Landing />
              <Products />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Landing />
              <Products scrollToSection />
            </>
          }
        />
        <Route path="/owner/dashboard" element={<DashLayout />} />
        <Route path="/owner/add-product" element={<AddProduct />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/order-hist" element={<Order />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Router>
  );
}

export default App;
