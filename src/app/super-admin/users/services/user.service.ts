import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { CreateUserCommand } from '../interfaces/create-user-command.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environments.baseUrl;
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjMwNjEwMzEsImV4cCI6MTcyMzA2NDYzMSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9TVVBFUl9BRE1JTiJdLCJlbWFpbCI6Im1vbnRpc2dhbEBlbWFpbC5jb20ifQ.We3-tBHWv50tOawdv8R5vaTpFnFUnYAMiZQYoCCJ9Z_rB96VjzM4Aowoh8bVC8VOKTVICmVn0seQiO2AOFP-zdFswtphpgpiO9L1Dn2ToxG7rvSGSWT_RKLUBY12fl-O8U2eLHCfNtjjxO0zc2hObEdvL1i8o8NwqnLqS6nkB1HvVs6xbg0dYcxYC3XRUWZxE5oV97Zq5T4COCDvurjqQOs6qo-G4lAr8-3pi2WPjtp7sjnTq0pT1J66DXDX2iLSvk89qYGEhsj2crbvQrvD4Z3XPmjTqbGP6CHuU4WF_wPiRvBUFanJOoKfuVCRQwSkYkbGL01rEMARTEKR17pK_g';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/super-admin/users`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  createUser(command: CreateUserCommand): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/super-admin/users`, command, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  deleteUser(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.baseUrl}/super-admin/users/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    }).pipe(
      catchError(() => {
        return of(false);
      }),
      map(() => true),
    );
  }
}
