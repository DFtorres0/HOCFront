import { useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { exampleApiQueryKeys } from "../utilities";

const getMockUsers = async (): Promise<ExampleApiResponse> => {
  // put here your api call
  const { data } = await api.get("/posts/1");
  return data;
};

const useGetMockUsers = (userId?: number) => {
  return useQuery<ExampleApiResponse>(
    exampleApiQueryKeys.detail(userId),
    async () => getMockUsers(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!userId, // if you want to fetch data only when userId is defined
    }
  );
};

export default useGetMockUsers;
