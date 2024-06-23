// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import ProductForm from './components/ProductForm'; // Añade esta línea

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
        <Route path="/product/:id" element={<ProtectedRoute element={<ProductDetail />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={<AdminDashboard />} adminOnly={true} />} 
        />
        <Route 
          path="/admin/cargar-producto" 
          element={<ProtectedRoute element={<ProductForm />} adminOnly={true} />} 
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
