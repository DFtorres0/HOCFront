import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import jwtDecode from "jwt-decode";
import { useAuth } from "src/UserProvider";
import { useNavigate } from "react-router-dom";

interface LoginObjectModel {
  username: string;
  password: string;
}

const postAuthentication = async (loginObject: LoginObjectModel) => {
  // put here your api call
  const { data } = await api.post("/Users/authenticate", loginObject);
  return data;
};

const useAuthentication = () => {
  const currentUserRole = useAuth() 
  const navigate = useNavigate()

  return useMutation((loginObject: LoginObjectModel) => postAuthentication(loginObject),
    {
        onError: (err: any) => {return navigate("/login")},
        onSuccess: (data: any) => {
            const {token} = data
            const decodedToken = jwtDecode<any>(token)
            const localUserRole = decodedToken.UserRole
            if (localUserRole) {
              currentUserRole?.setUserRoles(localUserRole)
            }
            sessionStorage.setItem('token', token)
        }
    }
  );
};

export default useAuthentication;
