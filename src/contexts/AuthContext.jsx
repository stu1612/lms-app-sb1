import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [admin, setAdmin] = useState("8oTfJALMNYcfA9KKxbnfpvc6ztk2");
  const [checked, setChecked] = useState(true);
  const [uid, setUID] = useState(() => {
    const value = localStorage.getItem("token");
    const parsedValue = JSON.parse(value);
    return parsedValue || null;
  });

  // method
  function logout() {
    setUID(null);
  }
  return (
    <AuthContext.Provider
      value={{ admin, setAdmin, checked, setChecked, uid, setUID, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
