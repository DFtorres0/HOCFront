import { Courses } from "./Courses";
import { User } from "./User";

export interface AvailableCourses {

  AvailableCourses?: bigint;

  UserId?: bigint;

  CourseId?: bigint;

  Course: Courses;
  
  User: User;
}
