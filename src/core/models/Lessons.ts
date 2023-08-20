import { IntensityLevel } from "./IntensityLevels";
import { Module } from "./Module";
import { Topic } from "./Topic";

export interface Lesson {
  LessonId?: bigint;

  LessonTitle: string;

  LessonDescription: string;

  LessonDuration?: number;

  LessonContent: string;

  IntensityLevelId?: number;

  TopicId?: bigint;

  ModuleId?: bigint;

  IntensityLevel?: IntensityLevel;

  Module?: Module;

  Topic?: Topic;
}

export class Lesson{
  public LessonTitle: string;
  public LessonDescription: string;
  public LessonDuration?: number | undefined;
  public LessonContent: string;
  public LessonIntensityLevelId?: number | undefined;
  public LessonTopic: string;

  constructor(Lesson: Lesson){
    this.LessonTitle = Lesson.LessonTitle
    this.LessonDescription = Lesson.LessonDescription
    this.LessonDuration = Lesson.LessonDuration
    this.LessonContent = Lesson.LessonContent
    this.LessonIntensityLevelId = Lesson.LessonIntensityLevelId
    this.LessonTopic = Lesson.LessonTopic
  }

}
