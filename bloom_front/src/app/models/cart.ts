import {Product} from './product';

export interface Cart{
  items: Item[];
  total_price: number;
}

export interface Item{
  id: number;
  product: Product;
  quantity: number;
  total_price: number;
}

