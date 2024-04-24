import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService{
  private BASE_URL = 'http://localhost:8000/api/categories';

  constructor(private client: HttpClient) {
  }
  getCategoryList(): Observable<Category[]> {
    return this.client.get<Category[]>(`${this.BASE_URL}/`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.client.get<Category>(`${this.BASE_URL}/${id}/`);
  }
  getProducts(id: number): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}/${id}/products/`);
  }
}
