import { Module } from "./Module";
import { Activity } from "./Activity";
import { Courses } from "./Courses";
import { IntensityLevel } from "./IntensityLevels";
import { MainCourse } from "./MainCourse";
import { MainCourseModules } from "./MainCourseModules";
import { Topic } from "./Topic";
import { Lesson } from "./Lessons";

const IntensityLevelMock: IntensityLevel = {
  LevelName: "Level 1",
  LevelDescription: "Loremipsum",
};

const CourseMock: Courses = {
  CourseName: "Course 1",
  CourseDescription: "Loremipsum",
  IntensityLevel: IntensityLevelMock,
};

const TopicMock: Topic = {
  TopicName: "Topic 2",
  TopicDescription: "Loremipsum",
};

const ModuleMock: Module = {
  Courses: CourseMock,
};

const LessonMock: Lesson[] = [
  {
    LessonTitle: "Lessons1",
    LessonDescription: "Loremipsum",
    LessonContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    LessonTitle: "Lessons2",
    LessonDescription: "Loremipsum",
    LessonContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    LessonTitle: "Lessons3",
    LessonDescription: "Loremipsum",
    LessonContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
];

const ActivitiesMock: Activity[] = [
  {
    ActivitiesId: 1n,
    ActivityTitle: "attempt1",
    ActivityContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    ActivitiesId: 2n,
    ActivityTitle: "attempt2",
    ActivityContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    ActivitiesId: 3n,
    ActivityTitle: "attempt3",
    ActivityContent: "Loremipsum",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
];

const MainCourseModuleMock: MainCourseModules[] = [
  {
    Activities: ActivitiesMock,
    Lessons: LessonMock,
  },
  {
    Activities: ActivitiesMock,
    Lessons: LessonMock,
  },
  {
    Activities: ActivitiesMock,
    Lessons: LessonMock,
  },
];

export const MainCourseMock: MainCourse[] = [
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
];
