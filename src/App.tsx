import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Chatbot />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;