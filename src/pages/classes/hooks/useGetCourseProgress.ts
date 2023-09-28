import { useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { courseProgressApiQueryKeys } from "../../utilities";

const getCourseProgress = async (userId: number | undefined, courseId: number | undefined): Promise<CourseLessonProgress[]> => {
  const { data } = await api.get(`/CourseLessonProgress/getbycourse/?userId=${userId}&courseId=${courseId}`);
  return data;
};

const useGetCourseProgress = (userId: number | undefined, courseId: number | undefined) => {
  return useQuery<CourseLessonProgress[]>(
    courseProgressApiQueryKeys.detail(),
    async () => getCourseProgress(userId, courseId),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!userId,
    }
  );
};

export default useGetCourseProgress;
