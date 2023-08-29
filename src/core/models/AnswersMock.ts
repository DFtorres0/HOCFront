import { CoursesMock } from "./MainCourseMock";

const topic: Topic = {
    topicName: "React",
    topicDescription: "Front-End"
}

const role: UserRole = {
    roleName: "Estudiante",
    roleDescription: "Estudiante"
}

const user: User = {
    userName: "Juan",
    userUsername: "JuanCho",
    userPassword: "1234",
    userEmail: "JuanCho@gmail.com",
    userRole: role
}

const forum: Forum = {
    forumTitle: "Foro1",
    topic: topic
}
const forumLesson: Forum = {
    forumTitle: "Foro Lección1",
    topic: topic,
    lesson: CoursesMock[0]?.modules[0]?.lessons[0]
}

const answer: Answer = {
    messageContent: "Lorem ipsum dolor sit amet, consectetur adip",
    forum: forum,
    user: user
}
const answerLesson: Answer = {
    messageContent: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    forum: forumLesson,
    user: user
}

const forums: Forum[] = [forum, forum, forumLesson, forumLesson]
const answers: Answer[] =[answer, answer, answer,answerLesson, answerLesson]

export {forums,answers}