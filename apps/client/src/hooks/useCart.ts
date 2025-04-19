import { useCartStore } from '@/store/useCart.store';

const useCart = () => {
  const cart = useCartStore((state) => state.cart);
  const getItem = useCartStore((state) => state.getItem);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore((state) => state.subtotal);
  const totalItems = useCartStore((state) => state.totalItems);
  const total = useCartStore((state) => state.total);

  return {
    cart,
    getItem,
    addToCart,
    updateQuantity,
    clearCart,
    removeFromCart,
    subtotal,
    totalItems,
    total,
  };
};

export default useCart;
