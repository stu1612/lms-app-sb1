import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [checked, setChecked] = useState(true);
  const [uid, setUID] = useState(null);

  // const [uid, setUID] = useState(() => {
  //   const value = localStorage.getItem("token");
  //   const parsedValue = JSON.parse(value);
  //   return parsedValue || null;
  // });
  return (
    <AuthContext.Provider value={{ checked, setChecked, uid, setUID }}>
      {children}
    </AuthContext.Provider>
  );
}
