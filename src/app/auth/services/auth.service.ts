import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginCommandInterface } from '../interfaces/login-command.interface';
import { jwtDecode } from 'jwt-decode';
import { TokenInterface } from '../interfaces/token.interface';
import { UserToken } from '../entities/user-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(command: LoginCommandInterface): Observable<UserToken> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, command).pipe(
      map(response => {
        let token = jwtDecode<TokenInterface>(response.token);

        let userToken = new UserToken(
          '',
          token.email,
          token.roles,
          token.iat,
          token.exp,
          response.token,
        );

        localStorage.setItem('token', userToken.toString());

        return userToken;
      }),
    );
  }
}
