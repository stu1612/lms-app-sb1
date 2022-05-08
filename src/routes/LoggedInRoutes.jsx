import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// pages
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import AdminCategories from "../pages/AdminCategories";
import AdminProjects from "../pages/AdminProjects";
import BadRoute from "../pages/404";

export default function LoggedInRoutes() {
  const { admin, uid } = useContext(AuthContext);
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {uid === admin && <Route path="admin" element={<AdminCategories />} />}
        {uid === admin && (
          <Route path="admin/:title" element={<AdminProjects />} />
        )}
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="dashboard/:title" element={<Projects />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
    </div>
  );
}
