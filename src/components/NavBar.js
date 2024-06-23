// src/components/NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { user, logout, cart } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/cart" className="nav-link">
        Carrito ({cart.length})
      </Link>
      <div className="auth-links">
        {user ? (
          <>
            <span className="nav-user">Hola, {user.username}</span>
            <Link to="/admin/cargar-producto" className="nav-link">Cargar Producto</Link>
            <button onClick={logout} className="nav-button">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            <Link to="/register" className="nav-link">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
