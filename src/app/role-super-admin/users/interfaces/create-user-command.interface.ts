import { Rol } from './rol.interface';

export interface CreateUserCommand {
  userName: string;
  email: string;
  password: string;
  rol: Rol;
}
