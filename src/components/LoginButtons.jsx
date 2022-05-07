// npm
import { Link } from "react-router-dom";

export default function LoginButtons() {
  return (
    <div className="landing__buttons">
      <Link className="btn btn-primary w-100" to="/signup">
        Sign Up
      </Link>
      <Link className="btn btn-primary w-100" to="/login">
        Login
      </Link>
    </div>
  );
}
