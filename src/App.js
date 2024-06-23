// src/App.js
import React from 'react';
import AppRouter from './AppRouter';
import { AuthProvider } from './context/AuthContext'; // Importar AuthProvider
import { CartProvider } from './context/CartContext'; // Importar CartProvider

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <AppRouter />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
