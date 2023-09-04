const IntensityLevelMock: IntensityLevel = {
  levelName: "Level 1",
  levelDescription: "Loremipsum",
};

const TopicMock: Topic = {
  topicName: "React",
  topicDescription: "React es una libreria creada por Facebook",
};

const LessonMock: Lesson[] = [
  {
    lessonTitle: "Componentes",
    lessonDescription:
      "En React, los componentes son bloques de construcción fundamentales para construir interfaces de usuario reutilizables y modulares. Los componentes en React pueden ser clases o funciones, y encapsulan la lógica y la representación visual de una parte específica de la interfaz de usuario.",
    lessonContent: "XlvziQilc_w",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
  {
    lessonTitle: "Elementos",
    lessonDescription:
      "En React, puedes crear elementos utilizando JSX (JavaScript XML) para representar y renderizar elementos en tu aplicación. Los elementos de React son objetos ligeros que describen lo que se debe renderizar en la interfaz de usuario.",
    lessonContent: "rUuusqy50yk",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
  {
    lessonTitle: "Hooks",
    lessonDescription:
      "Los hooks son una característica introducida en React a partir de la versión 16.8. Los hooks permiten a los componentes de función en React tener estado y utilizar características adicionales sin necesidad de utilizar clases.",
    lessonContent: "gxG4o0b7T3E",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
];

const ActivitiesMock: Activity[] = [
  {
    activityTitle: "attempt1",
    activityContent: "Loremipsum",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
  {
    activityTitle: "attempt2",
    activityContent: "Loremipsum",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
  {
    activityTitle: "attempt3",
    activityContent: "Loremipsum",
    intensityLevelNavigation: IntensityLevelMock,
    topicNavigation: TopicMock,
  },
];

const ModuleMock: Module[] = [
  {
    activities: ActivitiesMock,
    lessons: LessonMock,
  },
  {
    activities: ActivitiesMock,
    lessons: LessonMock,
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