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
  CourseName: "React",
  CourseDescription: "Loremipsum",
  IntensityLevel: IntensityLevelMock,
};

const TopicMock: Topic = {
  TopicName: "React",
  TopicDescription: "React es una libreria creada por Facebook",
};

const ModuleMock: Module = {
  Courses: CourseMock,
};

const LessonMock: Lesson[] = [
  {
    LessonTitle: "Componentes",
    LessonDescription: "En React, los componentes son bloques de construcción fundamentales para construir interfaces de usuario reutilizables y modulares. Los componentes en React pueden ser clases o funciones, y encapsulan la lógica y la representación visual de una parte específica de la interfaz de usuario.",
    LessonContent: "XlvziQilc_w",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    LessonTitle: "Elementos",
    LessonDescription:
      "En React, puedes crear elementos utilizando JSX (JavaScript XML) para representar y renderizar elementos en tu aplicación. Los elementos de React son objetos ligeros que describen lo que se debe renderizar en la interfaz de usuario.",
    LessonContent: "rUuusqy50yk",
    IntensityLevel: IntensityLevelMock,
    Module: ModuleMock,
    Topic: TopicMock,
  },
  {
    LessonTitle: "Hooks",
    LessonDescription: "Los hooks son una característica introducida en React a partir de la versión 16.8. Los hooks permiten a los componentes de función en React tener estado y utilizar características adicionales sin necesidad de utilizar clases.",
    LessonContent: "gxG4o0b7T3E",
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
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
  {
    Course: CourseMock,
    Modules: MainCourseModuleMock,
  },
];
