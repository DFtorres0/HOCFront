type IntensityLevel = {
  intensityLevelId?: bigint;
  levelName: string;
  levelDescription: string;
};

type Course = {
  courseId?: number;
  courseName: string;
  courseDescription: string;
  courseDuration?: number | undefined;
  intensityLevelId?: number;
  intensityLevel?: IntensityLevel;
  modules: Module[];
};

type Module = {
  moduleId?: bigint;
  moduleName?: string;
  courseId?: bigint;
  course?: Course;
  activities: Activity[];
  lessons: Lesson[];
};

type Activity = {
  activitiesId?: bigint;
  activityTitle: string;
  activityContent: string;
  intensityLevel?: number;
  topic?: number;
  moduleId?: number;
  intensityLevelNavigation?: IntensityLevel | undefined;
  module?: Module | undefined;
  topicNavigation: Topic | undefined;
};

type Lesson = {
  lessonId?: bigint;
  lessonTitle: string;
  lessonDescription: string;
  lessonDuration?: bigint;
  lessonContent: string;
  intensityLevel?: bigint;
  topic?: bigint;
  moduleId?: bigint;
  intensityLevelNavigation?: IntensityLevel;
  module?: Module;
  topicNavigation?: Topic;
};

type CourseActivityProgress = {
  courseActivityProgressId?: bigint;
  completed?: boolean;
  dueDate?: Date;
  activityId?: bigint;
  userId?: bigint;
  activity: Activity;
  user: User;
};

type CourseLessonProgress = {
  courseLessonProgressId?: bigint;
  userId?: bigint;
  lessonId?: bigint;
  completed?: boolean;
  lesson: Lesson;
  user: User;
};
