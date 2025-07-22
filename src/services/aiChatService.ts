import { Product } from '../types';

export class AIChatService {
  private products: Product[] = [];

  setProducts(products: Product[]) {
    this.products = products;
  }

  async getResponse(userMessage: string): Promise<string> {
    const message = userMessage.toLowerCase();
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Simple keyword-based responses
    if (message.includes('recommend') || message.includes('suggest')) {
      return this.getRecommendation(message);
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return this.getPriceInfo(message);
    }
    
    if (message.includes('material') || message.includes('gold') || message.includes('silver') || message.includes('diamond')) {
      return this.getMaterialInfo(message);
    }
    
    if (message.includes('shipping') || message.includes('delivery')) {
      return "We offer free shipping on orders over $500! Standard delivery takes 3-5 business days, and we also offer express shipping for next-day delivery.";
    }
    
    if (message.includes('return') || message.includes('exchange')) {
      return "We have a 30-day return policy for all jewelry. Items must be in original condition. We also offer free exchanges if you need a different size!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you find the perfect jewelry. I can recommend pieces based on your style, answer questions about materials and pricing, or help with shipping and returns. What are you looking for today?";
    }
    
    if (message.includes('help')) {
      return "I'd be happy to help! I can assist with:\n• Product recommendations\n• Material and pricing information\n• Shipping and delivery options\n• Returns and exchanges\n• Finding the perfect piece for any occasion\n\nWhat would you like to know?";
    }

    // Default response with product recommendation
    const featured = this.products.filter(p => p.featured);
    if (featured.length > 0) {
      const random = featured[Math.floor(Math.random() * featured.length)];
      return `I'd be happy to help! Based on our current collection, I think you might love our ${random.name} for $${random.price.toLocaleString()}. It's one of our most popular pieces! What type of jewelry are you interested in?`;
    }
    
    return "I'd love to help you find the perfect piece! Could you tell me more about what you're looking for? Are you interested in rings, necklaces, earrings, or bracelets?";
  }

  private getRecommendation(message: string): string {
    let filteredProducts = this.products;

    if (message.includes('ring')) {
      filteredProducts = this.products.filter(p => p.category === 'rings');
    } else if (message.includes('necklace')) {
      filteredProducts = this.products.filter(p => p.category === 'necklaces');
    } else if (message.includes('earring')) {
      filteredProducts = this.products.filter(p => p.category === 'earrings');
    } else if (message.includes('bracelet')) {
      filteredProducts = this.products.filter(p => p.category === 'bracelets');
    }

    if (message.includes('budget') || message.includes('affordable')) {
      filteredProducts = filteredProducts.filter(p => p.price < 1000);
    } else if (message.includes('luxury') || message.includes('premium')) {
      filteredProducts = filteredProducts.filter(p => p.price > 2000);
    }

    if (filteredProducts.length === 0) {
      filteredProducts = this.products.filter(p => p.featured);
    }

    const recommended = filteredProducts.slice(0, 2);
    
    if (recommended.length === 0) {
      return "Let me check our current collection for you. Could you be more specific about what you're looking for?";
    }

    const recommendations = recommended
      .map(p => `• ${p.name} - $${p.price.toLocaleString()} (${p.materials.join(', ')})`)
      .join('\n');
      
    return `Based on your preferences, I recommend:\n\n${recommendations}\n\nWould you like more details about any of these pieces?`;
  }

  private getPriceInfo(message: string): string {
    const prices = this.products.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

    return `Our jewelry collection ranges from $${minPrice.toLocaleString()} to $${maxPrice.toLocaleString()}, with an average price of around $${avgPrice.toLocaleString()}. We have pieces for every budget! What's your price range?`;
  }

  private getMaterialInfo(message: string): string {
    if (message.includes('gold')) {
      return "We work with 14k and 18k gold in yellow, white, and rose gold varieties. All our gold is ethically sourced and comes with a certificate of authenticity.";
    }
    
    if (message.includes('diamond')) {
      return "Our diamonds are ethically sourced and conflict-free. We use both natural and lab-grown diamonds, all certified for quality and authenticity.";
    }
    
    if (message.includes('silver')) {
      return "We use sterling silver (92.5% pure silver) for many of our pieces. All silver jewelry is rhodium-plated to prevent tarnishing and maintain its lustrous finish.";
    }

    return "We use only the finest materials including 14k/18k gold, sterling silver, ethically sourced diamonds, precious gemstones, and cultured pearls. All materials come with certificates of authenticity.";
  }
}