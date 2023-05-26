import { IntensityLevel } from "./IntensityLevels";

export interface Courses {
  CourseId?: bigint;

  CourseName: string;

  CourseDescription: string;

  CourseDuration?: bigint;

  IntensityLevelId?: bigint;

  IntensityLevel: IntensityLevel;
}
