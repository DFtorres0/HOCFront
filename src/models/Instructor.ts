import { User } from "./User";

export interface Instructor {

  InstructorId?: bigint;

  InstructorExperience?: bigint;

  UserId?: bigint;

  User: User;
}
