const IntensityLevelMock: IntensityLevel = {
  LevelName: "Level 1",
  LevelDescription: "Loremipsum",
};

const TopicMock: Topic = {
  TopicName: "React",
  TopicDescription: "React es una libreria creada por Facebook",
};

const LessonMock: Lesson[] = [
  {
    LessonTitle: "Componentes",
    LessonDescription:
      "En React, los componentes son bloques de construcción fundamentales para construir interfaces de usuario reutilizables y modulares. Los componentes en React pueden ser clases o funciones, y encapsulan la lógica y la representación visual de una parte específica de la interfaz de usuario.",
    LessonContent: "XlvziQilc_w",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
  {
    LessonTitle: "Elementos",
    LessonDescription:
      "En React, puedes crear elementos utilizando JSX (JavaScript XML) para representar y renderizar elementos en tu aplicación. Los elementos de React son objetos ligeros que describen lo que se debe renderizar en la interfaz de usuario.",
    LessonContent: "rUuusqy50yk",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
  {
    LessonTitle: "Hooks",
    LessonDescription:
      "Los hooks son una característica introducida en React a partir de la versión 16.8. Los hooks permiten a los componentes de función en React tener estado y utilizar características adicionales sin necesidad de utilizar clases.",
    LessonContent: "gxG4o0b7T3E",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
];

const ActivitiesMock: Activity[] = [
  {
    ActivityTitle: "attempt1",
    ActivityContent: "Loremipsum",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
  {
    ActivityTitle: "attempt2",
    ActivityContent: "Loremipsum",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
  {
    ActivityTitle: "attempt3",
    ActivityContent: "Loremipsum",
    IntensityLevelNavigation: IntensityLevelMock,
    TopicNavigation: TopicMock,
  },
];

const ModuleMock: Module[] = [
  {
    Activities: ActivitiesMock,
    Lessons: LessonMock,
  },
  {
    Activities: ActivitiesMock,
    Lessons: LessonMock,
  },
];

const CourseMock: Course = {
  courseName: "React",
  courseDescription: "Loremipsum",
  intensityLevel: IntensityLevelMock,
  modules: ModuleMock,
};

export const CoursesMock: Course[] = [
  CourseMock,
  CourseMock,
  CourseMock,
  CourseMock
]