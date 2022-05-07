// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import Dashboard from "./pages/Dashboard";
import AdminCategories from "./pages/AdminCategories";

// files
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<AdminCategories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
