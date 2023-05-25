import { Lesson } from "../../models/Lessons"
import { MainCourseMock } from "../../models/MainCourseMock"

const Videos: Lesson [][][] = MainCourseMock.map(result => result.Modules.map(module => module.Lessons))

export default Videos;