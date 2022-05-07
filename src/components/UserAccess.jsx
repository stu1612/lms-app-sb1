// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";

export default function UserAccess() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="landing__buttons">
      <Link className="btn btn-primary w-100" to="/dashboard">
        dashboard
      </Link>
      <Link className="btn btn-primary w-100" to="/" onClick={logout}>
        Logout
      </Link>
    </div>
  );
}
