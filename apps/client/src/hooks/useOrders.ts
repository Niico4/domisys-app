import { useOrderStore } from '@/store/useOrders.store';

const useOrders = () => {
  const orders = useOrderStore((state) => state.orders);
  const addOrder = useOrderStore((state) => state.addOrder);

  return {
    orders,
    addOrder,
  };
};

export default useOrders;
