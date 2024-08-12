import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="border p-4 rounded-lg mb-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <button 
          onClick={() => removeFromCart(item.id)} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
      <p className="text-gray-600 mb-2">Price: ${item.price.toFixed(2)}</p>
      <div className="flex items-center mb-2">
        <button 
          onClick={decrementQuantity} 
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          -
        </button>
        <input 
          type="number" 
          value={item.quantity} 
          onChange={handleQuantityChange} 
          className="w-16 text-center border rounded mx-2" 
        />
        <button 
          onClick={incrementQuantity} 
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          +
        </button>
      </div>
      <p className="text-lg font-bold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
