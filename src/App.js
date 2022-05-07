// npm
import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// files
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import { AuthContext } from "./contexts/AuthContext";
import "./styles/style.css";

export default function App() {
  const { uid, checked } = useContext(AuthContext);

  useEffect(() => {
    checked && localStorage.setItem("token", JSON.stringify(uid));
  }, [checked, uid]);

  return (
    <div className="App">
      <BrowserRouter>
        {uid && <LoggedInRoutes />}
        {!uid && <LoggedOutRoutes />}
      </BrowserRouter>
    </div>
  );
}
