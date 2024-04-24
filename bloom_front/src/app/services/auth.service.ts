import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from '../models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private BASE_URL = 'http://localhost:8000/login';

  constructor(private client: HttpClient) {
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/`, {username, password});
  }
}
