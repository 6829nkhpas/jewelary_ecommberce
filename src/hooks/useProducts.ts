import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/products`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(`Failed to fetch products. Make sure the backend server is running on port 5000. Error: ${err instanceof Error ? err.message : 'An error occurred'}`);
      // Fallback to mock data if API isn't available
      setProducts(getMockProducts());
    } finally {
      setLoading(false);
    }
  };

  const getProductById = async (id: string): Promise<Product | null> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error('Failed to fetch product');
      }
      
      return await response.json();
    } catch (err) {
      console.error('Error fetching product:', err);
      // Fallback to mock data
      return getMockProducts().find(p => p.id === id) || null;
    }
  };

  return { products, loading, error, refetch: fetchProducts, getProductById };
};

const getMockProducts = (): Product[] => [
  {
    id: '1',
    name: 'Ethereal Diamond Necklace',
    price: 2899,
    category: 'necklaces',
    description: 'A stunning piece featuring ethically sourced diamonds set in 18k white gold. The delicate chain complements the brilliant center stone, creating an timeless elegance perfect for any special occasion.',
    image_url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k White Gold', 'Diamond', 'Ethically Sourced'],
    in_stock: true,
    featured: true,
    created_at: '2025-01-08T10:00:00Z'
  },
  {
    id: '2',
    name: 'Rose Gold Infinity Ring',
    price: 899,
    category: 'rings',
    description: 'Crafted from premium rose gold with intricate infinity design. This ring symbolizes eternal love and features micro-pavé diamonds that catch light beautifully from every angle.',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k Rose Gold', 'Micro-pavé Diamonds'],
    in_stock: true,
    featured: true,
    created_at: '2025-01-08T09:30:00Z'
  },
  {
    id: '3',
    name: 'Sapphire Drop Earrings',
    price: 1599,
    category: 'earrings',
    description: 'Elegant drop earrings featuring Ceylon sapphires surrounded by brilliant-cut diamonds. The sophisticated design makes these perfect for both formal events and elevated everyday wear.',
    image_url: 'https://images.pexels.com/photos/1458556/pexels-photo-1458556.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['Sterling Silver', 'Ceylon Sapphire', 'Diamond Accents'],
    in_stock: true,
    featured: false,
    created_at: '2025-01-08T09:00:00Z'
  },
  {
    id: '4',
    name: 'Vintage Pearl Bracelet',
    price: 649,
    category: 'bracelets',
    description: 'A classic pearl bracelet featuring hand-selected freshwater pearls with a vintage-inspired clasp. Each pearl is carefully matched for size and luster, creating a timeless piece.',
    image_url: 'https://images.pexels.com/photos/1616401/pexels-photo-1616401.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['Freshwater Pearls', '14k Yellow Gold Clasp'],
    in_stock: true,
    featured: true,
    created_at: '2025-01-08T08:30:00Z'
  },
  {
    id: '5',
    name: 'Modern Gold Chain',
    price: 1299,
    category: 'necklaces',
    description: 'Contemporary gold chain with innovative link design. The substantial weight and modern aesthetic make this piece perfect for layering or wearing as a statement piece.',
    image_url: 'https://images.pexels.com/photos/1454179/pexels-photo-1454179.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['14k Yellow Gold', 'Italian Craftsmanship'],
    in_stock: false,
    featured: false,
    created_at: '2025-01-08T08:00:00Z'
  },
  {
    id: '6',
    name: 'Emerald Cocktail Ring',
    price: 3299,
    category: 'rings',
    description: 'Bold cocktail ring featuring a stunning emerald center stone surrounded by diamonds. The dramatic design and exceptional craftsmanship make this a true statement piece.',
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k Yellow Gold', 'Colombian Emerald', 'Diamond Halo'],
    in_stock: true,
    featured: true,
    created_at: '2025-01-08T07:30:00Z'
  }
];