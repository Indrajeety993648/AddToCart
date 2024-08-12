import '../styles/globals.css';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';

function MyApp({ Component, pageProps }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Create a debounced function to handle search term updates
  const debouncedSearch = useCallback(
    debounce((term) => {
      router.push(`/search?query=${encodeURIComponent(term.trim())}`);
    }, 300), // 300ms debounce delay
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <>
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="font-bold text-lg cursor-pointer">BestChoice</span>
          </Link>
          <div className="relative flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 rounded-md border-none focus:outline-none w-full text-black"
            />
            <button 
              type="button" 
              className="absolute right-0 p-2 text-white bg-blue-700 rounded-md hover:bg-blue-800"
            >
              Search
            </button>
          </div>
          <Link href="/cart" className="flex items-center">
            <span className="mr-2">Cart</span>
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
