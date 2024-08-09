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
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjMyMjk1MzksImV4cCI6MTcyMzIzMzEzOSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9TVVBFUl9BRE1JTiJdLCJlbWFpbCI6Im1vbnRpc2dhbEBlbWFpbC5jb20ifQ.O95F48Wzjtr78lO8FvjOotZEunhjHiiO4oxGqsARRZCvoY506arnBXrRFKWwAzAypUDQJxiGisx2ngUEVQOrwWYzi6OpzeCHE4uJJGkhzK0sFuH2Cp_SjnyorgPhYtZHjTGNwb3dqEPFl1K2srhofTxAMsM5mi4_v1VKbt17u3BMTmgxpfRbdcJQxAS5miTtQJ07TmXYI9ZJXATKH61l46ZMgtttyfx-rYiDWWNIuFGvB-jwkeuwwbHmjh9KANqnCpOQ5RcTu2eeKmbKN0FYZwTCZEVy5JEEZMLyiMvm1NUGQ_tPkEeUJFOja1CSsemJMtHMqSlC2jN5vNz0AwIMyw';

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
