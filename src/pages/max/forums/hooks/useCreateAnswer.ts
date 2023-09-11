import { useMutation } from "@tanstack/react-query";
import api from "src/core/services/api";

const createAnswer = async (newAnswer: QueryParams) => {
  const { data } = await api.post("/Answer", newAnswer);
  return data;
};

const useCreateAnswer = () => {
  return useMutation(createAnswer, {
    onError: (err: any) => {
      return err;
    },
  });
};

export default useCreateAnswer;
