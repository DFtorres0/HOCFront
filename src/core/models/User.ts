import { UserRole } from "./UserRole";

export interface User {

  UserId?: number;

  Name: string;

  UserName: string;

  Password: string;

  Email: string;

  Phone?: string;

  ProfilePicture?: string;

  RoleId?: number;

  Role?: UserRole | undefined ;
  
}

export class User{
   public Name: string;
   public Email: string;
   public RoleId?: number;
   public UserName: string;
   public Password: string;
   public Phone?: string;

   constructor(User: User) {
     this.Name = User.Name;
     this.Email = User.Email;
     this.RoleId = User.RoleId;
     this.UserName = User.UserName;
     this.Password = User.Password;
     this.Phone = User.Phone;
   }
}

