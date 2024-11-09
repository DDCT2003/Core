import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userRole: null,
  });

  const login = (role) => {
    setAuth({ isAuthenticated: true, userRole: role });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, userRole: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
