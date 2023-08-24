import api from "../../core/services/api";
import { useQuery } from "@tanstack/react-query";
import { exampleApiQueryKeys } from "../utilities";

const getMockUsersList = async (): Promise<ExampleApiResponse[]> => {
  // put here your api call
  const { data } = await api.get("/posts");
  return data;
};

const useMockUsersList = () => {
  return useQuery<ExampleApiResponse[]>(
    exampleApiQueryKeys.detail(),
    async () => getMockUsersList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useMockUsersList;
