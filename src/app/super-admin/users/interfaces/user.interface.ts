export interface User {
  id: string;
  userName: string;
  email: string;
  verified: boolean;
  imageName: string;
  rol: string;


}

export enum Rol {
  RoleUser = 'ROLE_USER',
  RoleAdmin = 'ROLE_ADMIN',
  RoleSuperAdmin = 'ROLE_SUPER_ADMIN',
}
