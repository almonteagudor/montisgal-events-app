import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { CreateUserCommand } from '../interfaces/create-user-command.interface';
import { UserToken } from '../../../auth/entities/user-token';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environments.baseUrl;
  private token: string = '';

  constructor(private httpClient: HttpClient) {
    let userToken = UserToken.fromString(localStorage.getItem('token') ?? '');

    console.log(userToken.isSuperAdmin());

    this.token = userToken.encodedToken;
  }

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
