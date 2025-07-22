import mongoose from 'mongoose';
import Product from './models/Product.js';
import 'dotenv/config';

import connectDB from './config/database.js';

const sampleProducts = [
  {
    name: 'Ethereal Diamond Necklace',
    price: 2899,
    category: 'necklaces',
    description: 'A stunning piece featuring ethically sourced diamonds set in 18k white gold. The delicate chain complements the brilliant center stone, creating an timeless elegance perfect for any special occasion.',
    image_url: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k White Gold', 'Diamond', 'Ethically Sourced'],
    in_stock: true,
    featured: true
  },
  {
    name: 'Rose Gold Infinity Ring',
    price: 899,
    category: 'rings',
    description: 'Crafted from premium rose gold with intricate infinity design. This ring symbolizes eternal love and features micro-pavé diamonds that catch light beautifully from every angle.',
    image_url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k Rose Gold', 'Micro-pavé Diamonds'],
    in_stock: true,
    featured: true
  },
  {
    name: 'Sapphire Drop Earrings',
    price: 1599,
    category: 'earrings',
    description: 'Elegant drop earrings featuring Ceylon sapphires surrounded by brilliant-cut diamonds. The sophisticated design makes these perfect for both formal events and elevated everyday wear.',
    image_url: 'https://images.pexels.com/photos/1458556/pexels-photo-1458556.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['Sterling Silver', 'Ceylon Sapphire', 'Diamond Accents'],
    in_stock: true,
    featured: false
  },
  {
    name: 'Vintage Pearl Bracelet',
    price: 649,
    category: 'bracelets',
    description: 'A classic pearl bracelet featuring hand-selected freshwater pearls with a vintage-inspired clasp. Each pearl is carefully matched for size and luster, creating a timeless piece.',
    image_url: 'https://images.pexels.com/photos/1616401/pexels-photo-1616401.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['Freshwater Pearls', '14k Yellow Gold Clasp'],
    in_stock: true,
    featured: true
  },
  {
    name: 'Modern Gold Chain',
    price: 1299,
    category: 'necklaces',
    description: 'Contemporary gold chain with innovative link design. The substantial weight and modern aesthetic make this piece perfect for layering or wearing as a statement piece.',
    image_url: 'https://images.pexels.com/photos/1454179/pexels-photo-1454179.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['14k Yellow Gold', 'Italian Craftsmanship'],
    in_stock: false,
    featured: false
  },
  {
    name: 'Emerald Cocktail Ring',
    price: 3299,
    category: 'rings',
    description: 'Bold cocktail ring featuring a stunning emerald center stone surrounded by diamonds. The dramatic design and exceptional craftsmanship make this a true statement piece.',
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    materials: ['18k Yellow Gold', 'Colombian Emerald', 'Diamond Halo'],
    in_stock: true,
    featured: true
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();