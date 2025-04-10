import { PaymentMethod } from './payment-method';
import { Customer } from './users/customer';
import { Delivery } from './users/delivery';

import { ProductWithQuantity } from '@/store/useCart.store';

export interface Order {
  id: string;
  created_at: Date;
  customer: Customer;
  delivery?: Delivery;
  paymentMethod: PaymentMethod;
  products: ProductWithQuantity[];
  status: OrderState;
  total_amount: number;
}

export type OrderState =
  | 'pending'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'cancelled';
