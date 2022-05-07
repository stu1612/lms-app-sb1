// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import img from "../assets/images/error.png";
import AdminAccess from "../components/AdminAccess";
import UserAccess from "../components/UserAccess";
import { AuthContext } from "../contexts/AuthContext";

export default function BadRoute() {
  const { uid, admin } = useContext(AuthContext);

  return (
    <div className="denied-access">
      <img src={img} alt="404 page" />
      <h2>Sorry, this is page does not exist or you dont have access</h2>
      {uid === admin && <AdminAccess />}
      {uid !== admin && <UserAccess />}
      {!uid && (
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      )}
    </div>
  );
}
