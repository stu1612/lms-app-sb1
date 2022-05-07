// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";

export default function AdminAccess() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="landing__buttons">
      <Link className="btn btn-primary w-100" to="/admin">
        admin
      </Link>
      <Link className="btn btn-primary w-100" to="/" onClick={logout}>
        Logout
      </Link>
    </div>
  );
}
