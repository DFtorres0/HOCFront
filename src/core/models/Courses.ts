import { IntensityLevel } from "./IntensityLevels";

export interface Courses {
  CourseId?: number;

  CourseName: string;

  CourseDescription: string;

  CourseDuration?: number | undefined;

  IntensityLevelId?: number;

  IntensityLevel?: IntensityLevel;
}

export class Courses{
  public CourseName: string;
  public CourseDescription: string;
  public CourseDuration?: number | undefined;
  public IntensityLevel?: IntensityLevel;

  constructor(Courses: Courses) {
    this.CourseName = Courses.CourseName
    this.CourseDescription = Courses.CourseDescription
    this.CourseDuration = Courses.CourseDuration
    this.IntensityLevel = Courses.IntensityLevel
  }
}
