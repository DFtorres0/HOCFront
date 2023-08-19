import { generateQueryKeys } from "../../core/functions";

const exampleApiQueryKeys = generateQueryKeys("example");
const userRolesApiQueryKeys = generateQueryKeys("user_roles")

export { exampleApiQueryKeys, userRolesApiQueryKeys }