import { User } from "./User";

export interface Session {
    token: string;
    User: User;
}