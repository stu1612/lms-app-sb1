import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);
  return (
    <AppContext.Provider
      value={{ courses, setCourses, projects, setProjects, file, setFile }}
    >
      {children}
    </AppContext.Provider>
  );
}
