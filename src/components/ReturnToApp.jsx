// npm
import { useContext } from "react";

// files
import { AuthContext } from "../contexts/AuthContext";
import AdminAccess from "./AdminAccess";
import UserAccess from "./UserAccess";

export default function ReturnToApp() {
  const { uid, admin } = useContext(AuthContext);

  return (
    <div className="landing__buttons">
      {uid === admin ? <AdminAccess /> : <UserAccess />}
    </div>
  );
}
