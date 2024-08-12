import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      // Product already in cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
