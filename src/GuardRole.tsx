import { Navigate } from "react-router-dom"
import { checkRoles, isValidToken } from "./core/functions"

type GuardRoleProps = (roles?:Role[]) => React.FC<React.PropsWithChildren<unknown>> 

const GuardRole: GuardRoleProps = (authorizedRoles) => ({children}) => {
    const isAllowed = checkRoles(authorizedRoles)
    if (!isAllowed || !isValidToken()) {
        return <Navigate to="/login"/>
    }
    return <>{children}</>
}

export default GuardRole