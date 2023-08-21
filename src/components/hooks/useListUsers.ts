import api from "../../core/services/api";
import { useQuery } from "@tanstack/react-query";
import { userRolesApiQueryKeys } from "../home/utilities";

const getUserList = async (): Promise<User[]> => {
  // put here your api call
  const { data } = await api.get("/Users/all");
  return data;
};

const useUserList = () => {
  return useQuery<User[]>(
    userRolesApiQueryKeys.detail(),
    async () => getUserList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useUserList;
