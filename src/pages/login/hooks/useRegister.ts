import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "src/core/functions";

const postUser = async (user: User) => {
  // put here your api call
  const { data } = await api.post("/Users/user", user);
  return data;
};

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation((user: User) => postUser(user), {
    onError: (err: any) => {
      const errorMessage = getErrorMessage(err, "error al crear el usuario");
      console.log(errorMessage)
    },
    onSuccess: (data: any) => {
      navigate("/login");
    },
  });
};

export default useRegister;
