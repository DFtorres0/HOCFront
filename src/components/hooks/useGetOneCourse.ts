import { useMutation } from "@tanstack/react-query";
import api from "../../core/services/api";

export interface postCourseIdModel {
    courseId?: string;
}

const getOneCourse = async (postCourse: postCourseIdModel) => {
  // put here your api call
  const { data } = await api.post("/Course/get", postCourse);
  return data;
};

const useGetOneCourse = () => {

  return useMutation((postCourse: postCourseIdModel) => getOneCourse(postCourse),
    {
        onError: (err: any) => console.log(err),
        onSuccess: (data: any) => {
            const course = data;
            return course
        }
    }
  );
};

export default useGetOneCourse;
