import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Cargar estado inicial desde localStorage
    const storedAuth = localStorage.getItem('auth');
    return storedAuth
      ? JSON.parse(storedAuth)
      : {
          isAuthenticated: false,
          userRole: null,
          userName: null,
          age: null,
          formalidad: null,
        };
  });

  useEffect(() => {
    // Guardar estado en localStorage cada vez que cambie
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const login = (role, name, edad, formalidad) => {
    setAuth({
      isAuthenticated: true,
      userRole: role,
      userName: name,
      age: edad,
      formalidad: formalidad,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      userRole: null,
      userName: null,
      age: null,
      formalidad: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
