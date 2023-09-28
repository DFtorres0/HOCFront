import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../../core/services/api";
import { getErrorMessage } from "src/core/functions";

const postAvailableCourse = async (availableCourse: AvailableCourses) => {
  // put here your api call
  const { data } = await api.post("/AvailableCourse/create", availableCourse);
  return data;
};

const useCreateAvailableCourse = () => {
  return useMutation(
    (availableCourse: AvailableCourses) =>
      postAvailableCourse(availableCourse),
    {
      onError: (err: any) => {
        const errorMessage = getErrorMessage(err, "error al crear un curso disponible");
        console.log(errorMessage);
      }
    }
  );
};

export default useCreateAvailableCourse;
