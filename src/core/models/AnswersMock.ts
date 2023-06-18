import { Topic } from "./Topic";
import { UserRole } from "./UserRole";
import { User } from "./User";
import { Forum } from "./Forums";
import { Answer } from "./Answer";
import { MainCourseMock } from "./MainCourseMock";

const topic: Topic = {
    TopicName: "React",
    TopicDescription: "Front-End"
}

const role: UserRole = {
    RoleName: "Estudiante",
    RoleDescription: "Estudiante"
}

const user: User = {
    UserName: "Juan",
    UserUsername: "JuanCho",
    UserPassword: "1234",
    UserEmail: "JuanCho@gmail.com",
    UserRole: role
}

const forum: Forum = {
    ForumTitle: "Foro1",
    Topic: topic
}
const forumLesson: Forum = {
    ForumTitle: "Foro Lección1",
    Topic: topic,
    Lesson: MainCourseMock[0].Modules[0].Lessons[0]
}

const answer: Answer = {
    MessageContent: "Lorem ipsum dolor sit amet, consectetur adip",
    Forum: forum,
    User: user
}
const answerLesson: Answer = {
    MessageContent: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    Forum: forumLesson,
    User: user
}

const forums: Forum[] = [forum, forum, forumLesson, forumLesson]
const answers: Answer[] =[answer, answer, answer,answerLesson, answerLesson]

export {forums,answers}