import { Document } from 'mongoose';

import { User } from './user';
import { Product } from './product';

export interface Order extends Document {
  owner: User;
  totalPrice: Number;
  products: Product[];
  created: Date;
}
