import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface CartItem {
  productId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface Order {
  id: number;
  status: string;
  total: number;
  createdAt: string;
  orderItems: {
    id: number;
    quantity: number;
    price: number;
    product: {
      id: number;
      name: string;
      description: string;
      imageUrl?: string;
    };
  }[];
}

interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  createOrder: () => Promise<void>;
  fetchOrders: () => Promise<void>;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const addToCart = (product: any) => {
    console.log('addToCart called with:', product);
    setCartItems(prev => {
      console.log('Current cart items:', prev);
      const existingItem = prev.find(item => item.productId === product.id);

      if (existingItem) {
        console.log('Updating existing item');
        const newItems = prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('New cart items (updated):', newItems);
        return newItems;
      }

      console.log('Adding new item');
      const newItem = {
        productId: product.id,
        name: product.name,
        description: product.description || '',
        price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
        quantity: 1,
        imageUrl: product.imageUrl
      };
      const newItems = [...prev, newItem];
      console.log('New cart items (added):', newItems);
      return newItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const createOrder = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token || cartItems.length === 0) return;

      const orderData = {
        items: cartItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      };

      await axios.post('http://localhost:3000/orders', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setCartItems([]);
      await fetchOrders();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get('http://localhost:3000/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <CartContext.Provider value={{
      cartItems,
      orders,
      addToCart,
      removeFromCart,
      updateQuantity,
      createOrder,
      fetchOrders,
      clearCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}