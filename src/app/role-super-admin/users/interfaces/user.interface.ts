import { Rol } from './rol.interface';

export interface User {
  id: string;
  userName: string;
  email: string;
  verified: boolean;
  imageName: string;
  rol: Rol;
}
