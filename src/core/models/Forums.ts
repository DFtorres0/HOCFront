import { Lesson } from "./Lessons";
import { Topic } from "./Topic";


export interface Forum {
  ForumId?: bigint;

  ForumTitle: string;

  ForumPublishDate?: Date;

  TopicId?: bigint;

  LessonId?: bigint;

  Lesson?: Lesson;

  Topic: Topic;
}

