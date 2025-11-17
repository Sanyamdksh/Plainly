import Signup from "./pages/signup";
import Landing from "./components/hero";
import Products from "./components/products";
import AuthContainer from "./pages/AuthContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from "./pages/admin/dashLayout";

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
        <Route path="/owner/dashboard" element={<DashLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
