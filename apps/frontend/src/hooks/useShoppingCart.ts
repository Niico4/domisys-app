import { useCartStore } from '@/store/useCart.store';

const useShoppingCart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    addToCart,
    cart,
    clearCart,
    removeFromCart,
    subtotal,
    totalItems,
    updateQuantity,
  };
};

export default useShoppingCart;
