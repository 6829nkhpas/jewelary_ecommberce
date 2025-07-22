export interface Product {
    _id?: string;
    id?: string;
    name: string;
    price: number;
    category: string;
    description: string;
    image_url: string;
    materials: string[];
    in_stock: boolean;
    featured: boolean;
    created_at: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface ChatMessage {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
  }