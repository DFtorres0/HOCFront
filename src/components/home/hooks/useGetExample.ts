import api from "../../../core/services/api";

const getMockUsers = async (): Promise<ExampleApiResponse> => {
  // put here your api call
  const { data } = await api.get("/posts/1");
  return data;
};

export default getMockUsers;
