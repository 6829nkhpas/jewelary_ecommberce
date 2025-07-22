import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Star, Award, Shield, Truck } from 'lucide-react';

const Homepage: React.FC = () => {
  const { products, loading } = useProducts();
  const featuredProducts = products.filter(product => product.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      
      {/* Featured Products Section */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our handpicked selection of extraordinary pieces, each crafted with meticulous attention to detail and timeless elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {featuredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No featured products available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-slate-600 text-sm">Handcrafted with finest materials and attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Lifetime Warranty</h3>
              <p className="text-slate-600 text-sm">Complete protection and repair service for your investment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Free Shipping</h3>
              <p className="text-slate-600 text-sm">Complimentary shipping on all orders over $500</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Expert Craftsmanship</h3>
              <p className="text-slate-600 text-sm">25+ years of jewelry making expertise and tradition</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
                Our Story of Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For over 25 years, Luxe has been at the forefront of fine jewelry design, combining traditional craftsmanship with contemporary aesthetics. Each piece in our collection tells a unique story of artistry, passion, and dedication to excellence.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that jewelry is more than just an accessory – it's a reflection of your personality, a celebration of life's precious moments, and an investment in timeless beauty that can be passed down through generations.
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1616401/pexels-photo-1616401.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jewelry craftsmanship"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our jewelry consultants are here to help you discover the perfect piece for any occasion. Get personalized recommendations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;