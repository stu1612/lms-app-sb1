import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [courses, setCourses] = useState([]);
  return (
    <AppContext.Provider value={{ courses, setCourses }}>
      {children}
    </AppContext.Provider>
  );
}
