import { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState('user');

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, handleRoleChange }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}