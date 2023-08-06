import { IntensityLevel } from "./IntensityLevels";
import { Module } from "./Module";
import { Topic } from "./Topic";

export interface Lesson {
  LessonId?: bigint;

  LessonTitle: string;

  LessonDescription: string;

  LessonDuration?: bigint;

  LessonContent: string;

  IntensityLevelId?: bigint;

  TopicId?: bigint;

  ModuleId?: bigint;

  IntensityLevel?: IntensityLevel;

  Module?: Module;

  Topic?: Topic;
}
