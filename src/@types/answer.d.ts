type Topic = {
  TopicId?: bigint;
  TopicName: string;
  TopicDescription: string;
  MainTopic?: bigint;
};

type Forum = {
  ForumId?: bigint;
  ForumTitle: string;
  ForumPublishDate?: Date;
  TopicId?: bigint;
  LessonId?: bigint;
  Lesson?: Lesson;
  Topic: Topic;
};

type Answer = {
  AnswerId?: bigint;
  MessageContent: string;
  ForumId?: bigint;
  SubAnswerId?: bigint;
  UserId?: bigint;
  Forum?: Forum;
  SubAnswer?: Answer;
  User?: User;
};
