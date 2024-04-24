import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private BASE_URL = 'http://localhost:8000/api';

  constructor(private client: HttpClient) {
  }
  getCart(): Observable<Cart>{
    return this.client.get<Cart>(`${this.BASE_URL}/carts/`);
  }
  createCartItem(product: number, quantity: number): Observable<any>{
    return this.client.post<any>(`${this.BASE_URL}/cart-items/`, {product, quantity});
  }
  deleteCartItem(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/cart-items/${id}/`);
  }
}
