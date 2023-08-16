import api from "../../../core/services/api";

const getMockUsersList = async (): Promise<ExampleApiResponse[]> => {
  // put here your api call
  const { data } = await api.get("/posts");
  return data;
};

export default getMockUsersList;
