import { UserRole } from "./UserRole";

export interface User {

  UserId: bigint;

  UserName?: string;

  UserUsername?: string;

  UserPassword?: string;

  UserEmail?: string;

  UserPhone: string;

  UserProfilePicture: string;

  UserRoleId: bigint;

  UserRole?: UserRole;
  
}
