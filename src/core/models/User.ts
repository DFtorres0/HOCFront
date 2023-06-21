import { UserRole } from "./UserRole";

export interface User {

  UserId?: number;

  UserName: string;

  UserUsername: string;

  UserPassword: string;

  UserEmail: string;

  UserPhone?: string;

  UserProfilePicture?: string;

  UserRoleId?: number;

  UserRole?: UserRole | undefined ;
  
}
