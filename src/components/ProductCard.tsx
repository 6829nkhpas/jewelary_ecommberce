import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  // Handle both MongoDB _id and fallback id
  const productId = product._id || product.id;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${productId}`} className="group block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.in_stock}
                className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 shadow-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={16} />
                <span>{product.in_stock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
              <button className="bg-white text-slate-800 p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200 shadow-lg">
                <Heart size={16} />
              </button>
            </div>
          </div>

          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}

          {/* Stock status */}
          {!product.in_stock && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sold Out
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-lg font-semibold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-slate-800">
                ${product.price.toLocaleString()}
              </span>
              <div className="flex flex-wrap gap-1 mt-2">
                {product.materials.slice(0, 2).map((material, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;