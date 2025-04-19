import { PaymentMethod } from './payment-method';
import { Customer } from './users/customer';
import { Delivery } from './users/delivery';

import { CartItem } from '@/store/useCart.store';

export interface Order {
  id: string;
  createdAt: Date;
  customer: Customer;
  delivery?: Delivery;
  paymentMethod: PaymentMethod;
  products: CartItem[];
  status: OrderState;
  totalAmount: number;
}

export type OrderState =
  | 'pending'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'cancelled';
