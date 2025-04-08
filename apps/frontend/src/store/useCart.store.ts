import { create } from 'zustand';
import { toast } from 'sonner';

import { CategoryType } from '@/modules/customer/home/types/product';

interface CartItem {
  id: string;
  category: CategoryType;
  image: string;
  measure: string;
  price: number;
  productName: string;
  quantity: number;
  stock: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      toast.success(`${product.productName} añadido al carrito`);
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }

    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    }));
  },
  clearCart: () => set({ cart: [] }),
}));
