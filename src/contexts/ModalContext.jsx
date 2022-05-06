import { createContext } from "react";

export const ModalContext = createContext();

export default function AppContextProvider({ children }) {
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
}
