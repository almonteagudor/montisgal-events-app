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
  private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjI4Njk4OTksImV4cCI6MTcyMjg3MzQ5OSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9TVVBFUl9BRE1JTiJdLCJlbWFpbCI6Im1vbnRpc2dhbEBlbWFpbC5jb20ifQ.IOtHsTvww4JV0Y4U3aqtdhCyBKVjcDoFnPZvthDcGCrXoKD3khKMaLDD1pYvgIJaaVE0gRu5ItRutLVjcfGOkTxuMIvYR9dJctmcHlvW4ZBRBxiixF7DAtg_2u37xaHA3iutc3-xE4WeTZ3JjmrRAMfq1VMEty4D2lFtc_POOdy_VPzNrUORK0gCe6aJyxoKTWL2WWwYKobEH78VQHMWe1XbGPefk2Mo932QsguLe2gr4BHaUHK255C1wjSX_W3VFxricTP8JZQoF8Xy7X2Nv-DzhGddzy365hVWJ6SrWz0fPirtpqMQGQJRnn7pqO3cK0bw-WabDwwjJ4klmYHI6Q';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/super-admin/users`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    });
  }

  createUser(command: CreateUserCommand): Observable<User | object[]> {
    return this.httpClient.post<User | object[]>(`${this.baseUrl}/super-admin/users`, command, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    }).pipe(
      catchError((error) => {
        return of(error.error);
      }),
    );
  }

  deleteUser(id: string): Observable<any> {
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
