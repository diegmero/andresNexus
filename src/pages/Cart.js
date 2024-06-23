// src/pages/Cart.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRemoveFromCart = (productId) => {
    try {
      removeFromCart(productId);
      setSuccess('Producto eliminado del carrito.');
      setError(null);
    } catch (err) {
      setError('Hubo un problema al eliminar el producto del carrito.');
      setSuccess(null);
    }
  };

  const handleBuyAll = () => {
    if (cart.length === 0) {
      setError('No hay productos en el carrito para comprar.');
      setSuccess(null);
      return;
    }
    // Aquí puedes agregar la lógica para comprar todos los productos
    alert('¡Todos los productos han sido comprados!');
    setSuccess('¡Compra realizada con éxito!');
    setError(null);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(product => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.title} />
                <div className="cart-item-details">
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                  <button onClick={() => handleRemoveFromCart(product.id)} className="remove-from-cart-button">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleBuyAll} className="buy-all-button">
            Comprar Todos
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
