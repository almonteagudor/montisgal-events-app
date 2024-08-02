import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environments.baseUrl;
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjI2MTI5NzUsImV4cCI6MTcyMjYxNjU3NSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9TVVBFUl9BRE1JTiJdLCJlbWFpbCI6Im1vbnRpc2dhbEBlbWFpbC5jb20ifQ.oUMTKhvv0T1Rzdo6lAcf0Z7fdtVJAAti1CJs7UAM8mjLrJkNDeWuPyOzMGDmGvGz2QexXlegQ6KG8ZkNCFEr3ClBwLArHAbUoy67KRGrzQIvikIzM9eVL2SuY-iNYx-n_vienJCilVq06MXeAipInQRHd7SnADfpztUZS1Yr0UJNxDAMJhwsz1l6VI25AQEL_EBxAqH9NQQuTNdUgprN-UQ1kHhq89DadCZNOv1beM2et-Z_DIJI-9XrAcEWGjggLbyApv6xt3KxL8cvlQFI5JZFxuwqm3YzJNJFo0LX2n1_BVq_gEjzAfkkCgdi9zr6genb5ii5bMEIuA9ysAAqCw';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/super-admin/users`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/super-admin/users/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }
}
