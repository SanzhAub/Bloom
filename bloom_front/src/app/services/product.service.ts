import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  private BASE_URL = 'http://localhost:8000/api/products';

  constructor(private client: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.BASE_URL}/`);
  }
  getProductById(id: number): Observable<Product> {
    return this.client.get<Product>(`${this.BASE_URL}/${id}/`);
  }
}
