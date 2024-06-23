// src/pages/AdminDashboard.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm'; // Asegúrate de crear este componente

const AdminDashboard = () => {
  const { user, isAdmin } = useContext(AuthContext);
  const [showProductForm, setShowProductForm] = useState(false);

  if (!user || !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user.username}</p>
      <button onClick={() => setShowProductForm(!showProductForm)}>
        {showProductForm ? 'Ocultar formulario' : 'Cargar nuevo producto'}
      </button>
      {showProductForm && <ProductForm />}
      {/* Aquí puedes agregar más funcionalidades de administración */}
    </div>
  );
};

export default AdminDashboard;
