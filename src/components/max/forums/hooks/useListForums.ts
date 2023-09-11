import api from "src/core/services/api";
import { useQuery } from "@tanstack/react-query";
import { forumsQueryKeys } from "../utilities";

const getForumsList = async (): Promise<ForumWithAnswers[]> => {
  const { data } = await api.get("/Forum/all");
  return data;
};

const useListForums = () => {
  return useQuery<ForumWithAnswers[]>(
    forumsQueryKeys.lists(),
    async () => getForumsList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useListForums;
