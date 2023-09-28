import { useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { lessonProgressApiQueryKeys } from "../../utilities";

const getLessonProgress = async (userId: number | undefined, lessonId: number | undefined): Promise<CourseLessonProgress[]> => {
  const { data } = await api.get(`/CourseLessonProgress/get/?userId=${userId}&lessonId=${lessonId}`);
  return data;
};

const useGetLessonProgress = (userId: number | undefined, lessonId: number | undefined) => {
  return useQuery<CourseLessonProgress[]>(
    lessonProgressApiQueryKeys.detail(),
    async () => getLessonProgress(userId, lessonId),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!userId,
    }
  );
};

export default useGetLessonProgress;
