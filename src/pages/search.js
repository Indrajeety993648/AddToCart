import { useRouter } from 'next/router';
import { useState } from 'react';
import products from '../data/products.json'; // Ensure this path is correct

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const searchTerm = query || '';
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Filter products based on the search term
  const filteredProducts = searchTerm.trim()
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products; // Show all products if search term is empty

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">
        {searchTerm ? `Search Results for "${searchTerm}"` : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <button 
                onClick={() => addToCart(product)} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
