import { Order } from '../order';

import { UserBase } from './user-base';

export interface Delivery extends UserBase {
  orders: Order[];
}
