import React, { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtener productos existentes del localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    // Añadir el nuevo producto
    const updatedProducts = [...existingProducts, product];
    // Guardar en localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    console.log('Producto guardado:', product);
    alert('Producto cargado con éxito');
    // Limpiar el formulario
    setProduct({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="description" value={product.description} onChange={handleChange} placeholder="Descripción" required />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Precio" required type="number" />
      <input name="image" value={product.image} onChange={handleChange} placeholder="URL de la imagen" required />
      <button type="submit">Cargar Producto</button>
    </form>
  );
}

export default ProductForm;
