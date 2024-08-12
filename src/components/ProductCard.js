import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsInCart(true); // Show quantity controls after adding to cart
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      if (newQuantity === 0) {
        setIsInCart(false); // Show "Add to Cart" button if quantity is 0
      }
      return newQuantity;
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
      <img 
        src={product.image || '/images/placeholder.jpg'}
        alt={product.name || 'Product Image'}
        className="w-full h-48 object-cover mb-4 rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name || 'Product Name'}</h2>
      <p className="text-gray-600 mb-4">{product.description || 'No description available.'}</p>
      <p className="text-lg font-bold mb-4">${product.price || '0.00'}</p>

      {isInCart ? (
        <div className="flex items-center mb-4">
          <button 
            onClick={decrementQuantity}
            className="bg-gray-300 text-black px-2 py-1 rounded-l"
          >
            -
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly
            className="text-center border-t border-b border-gray-300 px-4 py-1 w-12"
          />
          <button 
            onClick={incrementQuantity}
            className="bg-gray-300 text-black px-2 py-1 rounded-r"
          >
            +
          </button>
        </div>
      ) : (
        <button 
          onClick={handleAddToCart} 
          className="bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:shadow-md"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
