import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md transition-transform hover:scale-110"/>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold mb-4">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-600 text-white px-4 py-2 rounded transition-colors hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
