import { Activity } from "./Activity";
import { User } from "./User";

export interface CourseActivityProgress {
    
  CourseActivityProgressId?: bigint;

  Completed?: boolean;

  DueDate?: Date;

  ActivityId?: bigint;

  UserId?: bigint;

  Activity: Activity;

  User: User;
}
