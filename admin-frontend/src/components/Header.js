// src/components/Header.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa el hook del contexto
import { FaHome, FaShopify,  FaUserLock, FaCloud, FaShoppingCart,FaAdn, FaAward } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault(); 
    logout(); 
  };

  let headerContent;
  if (location.pathname === '/') {
    headerContent = (
      <>
        <FaShoppingCart className="header-icon" /> <h1 className="header-title">Bienvenido</h1>
      </>
    );
  } else if (location.pathname === '/tienda' || location.pathname === '/tiendaClima' || location.pathname === '/WFATienda') {
    headerContent = (
      <>
           <li className="nav-item"><a href="/tienda" className="nav-link"> 
          <FaHome className='nav-icon'/> Inicio</a></li>
          <li className="nav-item"><a href="/tiendaClima" className="nav-link">
          <FaCloud className='nav-icon'/> Ofertas de clima</a></li>
          <li className="nav-item"><a href="/WFATienda" className="nav-link">
          <FaAward className='nav-icon'/> For U </a></li>
          <li className="nav-item"><a href="/contact" onClick={handleLogout} className="nav-link">
          <FaUserLock className='nav-icon'/> Cerrar Sesión</a></li>
      </>
    );
  } else if (location.pathname === '/admin' || location.pathname === '/tiendaAdmin') {
    headerContent = (
      <>
         <li className="nav-item"><a href="/tiendaAdmin" className="nav-link"> 
         <FaShopify className='nav-icon'/> Ver Productos</a></li>
         <li className="nav-item"><a href="/contact" onClick={handleLogout} className="nav-link">
         <FaUserLock className='nav-icon'/> Cerrar Sesión</a></li>
      </>
    );
  } else {
    headerContent = (
      <>
        <h1 className="header-title">Mi Aplicación</h1>
      </>
    );
  }

  return (
    <header className="header">
      <div className="header-content">
      <FaHome className="header-icon" /> <h1 className="header-title">DDCT SHOP</h1>
        
      </div>
      <nav className="nav">
        <ul className="nav-list">
        {headerContent}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
