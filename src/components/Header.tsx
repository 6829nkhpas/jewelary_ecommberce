import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Gem } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-200">
              <Gem className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-slate-800">Luxe</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-yellow-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <a href="#collections" className="text-slate-700 hover:text-yellow-600 font-medium transition-colors duration-200">
              Collections
            </a>
            <a href="#about" className="text-slate-700 hover:text-yellow-600 font-medium transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-yellow-600 font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-700 hover:text-yellow-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-700 hover:text-yellow-600 transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-slate-700 hover:text-yellow-600 transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;