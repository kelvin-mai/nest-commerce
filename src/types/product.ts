import { Document } from 'mongoose';

import { User } from './user';

export interface Product extends Document {
  owner: User;
  title: string;
  image: string;
  description: string;
  number: number;
  created: Date;
}
