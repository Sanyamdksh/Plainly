import Signup from "./pages/signup";
import Landing from "./components/hero";
import AuthContainer from "./pages/AuthContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/home" element={<Landing />} />;
      </Routes>
    </Router>
  );
}

export default App;
