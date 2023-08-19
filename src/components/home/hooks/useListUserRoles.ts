import api from "../../../core/services/api";
import { useQuery } from "@tanstack/react-query";
import { userRolesApiQueryKeys } from "../utilities";

const getUserRoleList = async (): Promise<UserRole[]> => {
  // put here your api call
  const { data } = await api.get("/UserRole/all");
  return data;
};

const useUserRoleList = () => {
  return useQuery<UserRole[]>(
    userRolesApiQueryKeys.detail(),
    async () => getUserRoleList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useUserRoleList;
