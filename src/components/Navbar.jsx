import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-800">HARBORED</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-800">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-800">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-800">About</Link>
            <Link to="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-800">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-green-800">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-800">About</Link>
            <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:text-green-800">Cart ({cartCount})</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}