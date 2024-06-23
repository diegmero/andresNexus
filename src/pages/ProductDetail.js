// src/pages/ProductDetail.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext'; // Importar CartContext
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext); // Usar addToCart del contexto

  useEffect(() => {
    // Reemplaza esta URL con la URL de tu API
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    console.log(`Producto agregado al carrito: ${product.title}`);
  };

  const handleBuyNow = () => {
    // Lógica para la compra inmediata
    console.log(`Compra inmediata para: ${product.title}`);
    // Aquí podrías redirigir al usuario a una página de checkout, por ejemplo.
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Añadir al carrito
      </button>
      {user ? (
        <button onClick={handleBuyNow} className="buy-now-button">
          Comprar ahora
        </button>
      ) : (
        <button className="buy-now-button disabled" disabled>
          Comprar ahora (Inicia sesión para comprar)
        </button>
      )}
    </div>
  );
};

export default ProductDetail;