import { useEffect } from "react"
import { useAuth } from "./UserProvider"
import { getDecodedToken } from "./core/functions"

export const useValidateContext = () => {
    const auth = useAuth()
    useEffect(() => {
        const token = getDecodedToken()
        
        const localUserRole = token?.UserRole
        if (localUserRole) {
          auth?.setUserRoles(localUserRole)
        }

    },[])
}