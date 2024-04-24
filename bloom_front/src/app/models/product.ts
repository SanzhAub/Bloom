import {Category} from './category';
import {Image} from './image';

export interface Product{
  id: number;
  name: string;
  price: number;
  images: Image[];
  in_stock: boolean;
  description: string;
  created_at: Date;
  category: Category;
  quantity: number;
}
