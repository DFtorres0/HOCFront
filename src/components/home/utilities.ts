import { generateQueryKeys } from "../../core/functions";

const exampleApiQueryKeys = generateQueryKeys("example");
const userRolesApiQueryKeys = generateQueryKeys("user_roles")
const coursesApiQueryKeys = generateQueryKeys("courses")

export { exampleApiQueryKeys, userRolesApiQueryKeys, coursesApiQueryKeys }