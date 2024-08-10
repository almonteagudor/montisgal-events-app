import { Rol } from './rol';

export class UserToken {
  constructor(
    private _userName: string = '',
    private _email: string,
    private _roles: string[],
    private _issuedAt: string,
    private _expiresAt: string,
    private _encodedToken: string,
  ) {}

  get userName(): string {
    return this._userName == '' ? 'UserName' : this._userName;
  }

  get email(): string {
    return this._email;
  }

  get roles(): string[] {
    return this._roles;
  }

  get issuedAt(): string {
    return this._issuedAt;
  }

  get expiresAt(): string {
    return this._expiresAt;
  }

  get encodedToken(): string {
    return this._encodedToken;
  }

  isAdmin(): boolean {
    return this._roles.includes(Rol.RoleSuperAdmin) || this._roles.includes(Rol.RoleAdmin);
  }

  isSuperAdmin(): boolean {
    return this._roles.includes(Rol.RoleSuperAdmin);
  }

  toString(): string {
    return JSON.stringify(this);
  }

  static fromString(data: string): UserToken {
    let object = JSON.parse(data);

    return new UserToken(
      object._userName,
      object._email,
      object._roles,
      object._issuedAt,
      object._expiresAt,
      object._encodedToken,
    );
  }
}
