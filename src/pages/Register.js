// src/pages/Register.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Aquí deberías hacer una llamada a tu API para registrar al usuario.
      const userData = { username, password };
      register(userData); // Simula el registro.
      navigate('/login'); // Redirige a la página de inicio de sesión después de registrarse.
    } catch (error) {
      console.error('Error al registrar:', error);
      // Manejo de errores, por ejemplo, mostrar un mensaje al usuario.
    }
  };

  return (
    <div className="auth-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleRegister}>
        <label>
          Nombre de usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
