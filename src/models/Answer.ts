import { Forum } from "./Forums";
import { User } from "./User";

export interface Answer {
  AnswerId?: bigint;

  MessageContent: string;

  ForumId?: bigint;

  SubAnswerId?: bigint;

  UserId?: bigint;

  Forum?: Forum;

  SubAnswer?: Answer;

  User?: User;
}
