import {Roles} from './role';

export interface User {
  uid: string;
  name: string;
  email: string;
  activated: boolean;
  roles: Roles;
  profileImage?: string;
}
