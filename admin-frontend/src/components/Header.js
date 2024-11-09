import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { auth, logout } = useAuth();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px',  color: '#fff' }}>
      <h4 className='title'>DDCT Shop</h4>
      {auth.isAuthenticated && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Bienvenido,  {auth.userRole}!</span>
          <button  type='logout'
            onClick={logout} 
           >
            Cerrar sesión
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
