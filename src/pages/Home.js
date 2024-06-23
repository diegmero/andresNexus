// src/pages/Home.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(AuthContext);

  useEffect(() => {
    // Reemplaza esta URL con la URL de tu API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Producto agregado al carrito: ${product.title}`);
  };

  return (
    <div className="home-container">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>Precio: ${product.price}</p>
            </Link>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
