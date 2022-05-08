// npm
import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// files
import { AuthContext } from "./contexts/AuthContext";
import AppContextProvider from "./contexts/AppContext";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import Modal from "./components/Modal";
import ModalContextProvider from "./contexts/ModalContext";
import "./styles/style.css";

export default function App() {
  const { uid, checked } = useContext(AuthContext);

  useEffect(() => {
    checked && localStorage.setItem("token", JSON.stringify(uid));
  }, [checked, uid]);

  return (
    <div className="App">
      <ModalContextProvider>
        <AppContextProvider>
          <BrowserRouter>
            {uid && <LoggedInRoutes />}
            {!uid && <LoggedOutRoutes />}
          </BrowserRouter>
          <Modal />
        </AppContextProvider>
      </ModalContextProvider>
    </div>
  );
}
