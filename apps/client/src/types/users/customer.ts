import { Order } from '../order';
import { PaymentMethod } from '../payment-method';

import { UserBase } from './user-base';

export interface Customer extends UserBase {
  address: Address;
  paymentMethods: PaymentMethod[];
  orders: Order[];
}

interface Address {
  id: string;
  street: string;
  neighborhood: string;
  details?: string;
}
