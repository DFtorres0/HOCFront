import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { useNavigate } from "react-router-dom";

const postUser = async (user: User) => {
  // put here your api call
  const { data } = await api.post("/Users/user", user);
  return data;
};

const useRegister = () => {
  const navigate = useNavigate()

  return useMutation((user: User) => postUser(user),
    {
        onError: (err: any) => {console.log(err)},
        onSuccess: (data: any) => {
            navigate("/login")
        }
    }
  );
};

export default useRegister;
