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
  quizzes: Quiz[];
};

type Quiz = {
  quizId: number;
  quizName: string;
  moduleId: number;
  questions: Question[];
};

type Questions = {
  questionId: number;
  questionQuery: string;
  questionAnswers: QuestionAnswers[];
};

type QuestionAnswers = {
  questionAnswerId: number;
  questionAnswerText: string;
  isCorrect: boolean;
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
  lessonResources?: string;
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
  lesson?: Lesson;
  user?: User;
};
