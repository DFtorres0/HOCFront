type IntensityLevel = {
  intensityLevelId?: number;
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
  moduleId?: number;
  moduleName?: string;
  courseId?: number;
  course?: Course;
  activities: Activity[];
  lessons: Lesson[];
};

type Activity = {
  activitiesId?: number;
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
  lessonId?: number;
  lessonTitle: string;
  lessonDescription: string;
  lessonDuration?: number;
  lessonContent: string;
  intensityLevel?: number;
  topic?: number;
  moduleId?: number;
  intensityLevelNavigation?: IntensityLevel;
  module?: Module;
  topicNavigation?: Topic;
};

type CourseActivityProgress = {
  courseActivityProgressId?: number;
  completed?: boolean;
  dueDate?: Date;
  activityId?: number;
  userId?: number;
  activity: Activity;
  user: User;
};

type CourseLessonProgress = {
  courseLessonProgressId?: number;
  userId?: number;
  lessonId?: number;
  completed?: boolean;
  lesson: Lesson;
  user: User;
};
