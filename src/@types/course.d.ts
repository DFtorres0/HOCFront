type IntensityLevel = {
  IntensityLevelId?: bigint;
  LevelName: string;
  LevelDescription: string;
};

type Course = {
  CourseId?: number;
  CourseName: string;
  CourseDescription: string;
  CourseDuration?: number | undefined;
  IntensityLevelId?: number;
  IntensityLevel?: IntensityLevel;
  Modules: Module[];
};

type Module = {
  ModuleId?: bigint;
  CourseId?: bigint;
  Course?: Course;
  Activities: Activity[];
  Lessons: Lesson[];
};

type Activity = {
  ActivitiesId?: bigint;
  ActivityTitle: string;
  ActivityContent: string;
  IntensityLevel?: number;
  Topic?: number;
  ModuleId?: number;
  IntensityLevelNavigation?: IntensityLevel | undefined;
  Module?: Module | undefined;
  TopicNavigation: Topic | undefined;
};

type Lesson = {
  LessonId?: bigint;
  LessonTitle: string;
  LessonDescription: string;
  LessonDuration?: bigint;
  LessonContent: string;
  IntensityLevel?: bigint;
  Topic?: bigint;
  ModuleId?: bigint;
  IntensityLevelNavigation?: IntensityLevel;
  Module?: Module;
  TopicNavigation?: Topic;
};

type CourseActivityProgress = {
  CourseActivityProgressId?: bigint;
  Completed?: boolean;
  DueDate?: Date;
  ActivityId?: bigint;
  UserId?: bigint;
  Activity: Activity;
  User: User;
};

type CourseLessonProgress = {
  CourseLessonProgressId?: bigint;
  UserId?: bigint;
  LessonId?: bigint;
  Completed?: boolean;
  Lesson: Lesson;
  User: User;
};
