import { Courses } from "./Courses";

export interface Module {

  ModuleId?: bigint;

  CourseId?: bigint;

  Courses: Courses;
  
}
