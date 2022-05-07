import { Route, Routes } from "react-router-dom";
// pages
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import BadRoute from "../pages/404";

export default function LoggedOutRoutes() {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
    </div>
  );
}
