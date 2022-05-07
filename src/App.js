// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
