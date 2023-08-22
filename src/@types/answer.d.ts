type Topic = {
  topicId?: bigint;
  topicName: string;
  topicDescription: string;
  mainTopic?: bigint;
};

type Forum = {
  forumId?: bigint;
  forumTitle: string;
  forumPublishDate?: Date;
  topicId?: bigint;
  lessonId?: bigint;
  lesson?: Lesson;
  topic: Topic;
};

type Answer = {
  answerId?: bigint;
  messageContent: string;
  forumId?: bigint;
  subAnswerId?: bigint;
  userId?: bigint;
  forum?: Forum;
  subAnswer?: Answer;
  user?: User;
};
