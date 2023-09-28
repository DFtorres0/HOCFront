import { generateQueryKeys } from "../core/functions";

const exampleApiQueryKeys = generateQueryKeys("example");
const userRolesApiQueryKeys = generateQueryKeys("user_roles");
const coursesApiQueryKeys = generateQueryKeys("courses");
const lessonProgressApiQueryKeys = generateQueryKeys("lessonProgress");
const courseProgressApiQueryKeys = generateQueryKeys("courseProgress");
const authenticationApiQueryKeys = generateQueryKeys("authentication");

export {
  exampleApiQueryKeys,
  userRolesApiQueryKeys,
  coursesApiQueryKeys,
  lessonProgressApiQueryKeys,
  courseProgressApiQueryKeys,
};
