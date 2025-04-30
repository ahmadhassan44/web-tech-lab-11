import { createContext, useState, useContext } from "react";

// Create the context
const RoleContext = createContext();

// Create a provider component
export function RoleProvider({ children }) {
  const [role, setRole] = useState("user");

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === "user" ? "admin" : "user"));
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
}

// Custom hook for using the context
export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
