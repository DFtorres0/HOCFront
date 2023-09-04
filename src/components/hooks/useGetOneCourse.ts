import { useQuery } from "@tanstack/react-query";
import api from "../../core/services/api";
import { coursesApiQueryKeys } from "../utilities";

export interface postCourseIdModel {
    courseId?: string;
}

const getOneCourse = async (id: string | undefined): Promise<Course> => {
  // put here your api call
  const { data } = await api.post(`/Course/get/?id=${id}`);
  return data;
};

const useGetOneCourse = (id: string | undefined) => {
  return useQuery<Course>(
    coursesApiQueryKeys.detail(),
    async () => getOneCourse(id),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useGetOneCourse;
