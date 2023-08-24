type Topic = {
  topicId?: number;
  topicName: string;
  topicDescription: string;
  mainTopic?: number;
};

type Forum = {
  forumId?: number;
  forumTitle: string;
  forumPublishDate?: Date;
  topicId?: number;
  lessonId?: number;
  lesson?: Lesson;
  topic: Topic;
};

type Answer = {
  answerId?: number;
  messageContent: string;
  forumId?: number;
  subAnswerId?: number;
  userId?: number;
  forum?: Forum;
  subAnswer?: Answer;
  user?: User;
};
