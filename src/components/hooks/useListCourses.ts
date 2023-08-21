import api from "../../core/services/api";
import { useQuery } from "@tanstack/react-query";
import { coursesApiQueryKeys } from "../home/utilities";

const getCourseList = async (): Promise<Course[]> => {
  // put here your api call
  const { data } = await api.get("/Course/all");
  return data;
};

const useCourseList = () => {
  return useQuery<Course[]>(
    coursesApiQueryKeys.detail(),
    async () => getCourseList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useCourseList;
