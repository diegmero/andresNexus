// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Aquí deberías hacer una llamada a tu API para autenticar al usuario.
      // Por ahora, simularemos una respuesta del servidor
      const response = await mockLoginAPI(username, password);
      
      if (response.success) {
        login(response.userData);
        if (response.userData.role === 'admin') {
          navigate('/admin'); // Redirige a la página de administración
        } else {
          navigate('/'); // Redirige a la página principal para clientes
        }
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      alert('Ocurrió un error durante el inicio de sesión');
    }
  };

  // Esta función simula una llamada a la API
  const mockLoginAPI = async (username, password) => {
    // Simula una demora en la red
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simula la verificación de credenciales
    if (username === 'admin' && password === 'admin123') {
      return { 
        success: true, 
        userData: { username: 'admin', role: 'admin' } 
      };
    } else if (username === 'user' && password === 'user123') {
      return { 
        success: true, 
        userData: { username: 'user', role: 'client' } 
      };
    } else {
      return { success: false };
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Nombre de usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
