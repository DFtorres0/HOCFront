import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { getErrorMessage } from "src/core/functions";

const postLessonProgress = async (lessonProgress: CourseLessonProgress) => {
  // put here your api call
  const { data } = await api.post("/CourseLessonProgress/create", lessonProgress);
  return data;
};

const useCreateLessonProgress = () => {
  return useMutation(
    (lessonProgress: CourseLessonProgress) =>
      postLessonProgress(lessonProgress),
    {
      onError: (err: any) => {
        const errorMessage = getErrorMessage(err, "error al crear un progreso");
        console.log(errorMessage);
      }
    }
  );
};

export default useCreateLessonProgress;
