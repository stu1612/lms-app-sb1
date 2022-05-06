import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function AppContextProvider({ children }) {
  const [isModal, setIsModal] = useState(null);
  return (
    <ModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </ModalContext.Provider>
  );
}
