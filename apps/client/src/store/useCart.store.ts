import { create } from 'zustand';
import { toast } from 'sonner';

import { Product } from '@/types/product';
import { SHOPPING_COST } from '@/constants/mock/mock-shopping-cart';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  getItem: (productId: string) => CartItem | undefined;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, change: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
  total: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  getItem: (productId) => {
    return get().cart.find((item) => item.id === productId);
  },

  addToCart: (product) => {
    if (product.stock <= 0) {
      toast.error('Producto sin stock disponible');
      return;
    }

    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem && existingItem.quantity >= product.stock) {
        toast.error(`Stock disponible: ${product.stock} unidades`);
        return state;
      }

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

        return { cart: updatedCart };
      }

      toast.success(`${product.productName} añadido al carrito`);
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
    toast.success(`Producto eliminado del carrito`);
  },

  updateQuantity: (productId, change) => {
    set((state) => {
      const item = state.cart.find((item) => item.id === productId);
      if (!item) return state;

      const newQuantity = item.quantity + change;

      if (newQuantity > item.stock) {
        toast.error(`Stock máximo: ${item.stock} unidades`);
        return state;
      }

      if (newQuantity < 1) {
        toast.info(`Producto eliminado del carrito`);
        return {
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      };
    });
  },

  clearCart: () => {
    set({ cart: [] });
    toast.success('El carrito se ha vaciado');
  },

  totalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },

  subtotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  total: () => {
    return get().subtotal() + SHOPPING_COST;
  },
}));
