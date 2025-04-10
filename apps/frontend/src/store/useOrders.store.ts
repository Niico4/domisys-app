import { create } from 'zustand';

import { Order } from '@/types/order';

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const useOrderStore = create<OrderStore>()((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));
