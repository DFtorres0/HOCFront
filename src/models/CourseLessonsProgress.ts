import { Lesson } from "./Lessons";
import { User } from "./User";

export interface CourseLessonProgress {
    
  CourseLessonProgressId?: bigint;

  UserId?: bigint;

  LessonId?: bigint;

  Completed?: boolean;

  Lesson: Lesson;

  User: User;

}
