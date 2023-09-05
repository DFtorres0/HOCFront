import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/classes/ClassesHdStyle.css";
import NavegationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";
import useGetOneCourse, { postCourseIdModel } from "../hooks/useGetOneCourse";
import { Spinner } from "react-bootstrap";

function Classes() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>();

  const { id } = useParams<Record<string, string>>();

  const course: postCourseIdModel = {
    courseId: id,
  };

  const {
    error: courseError,
    isSuccess: courseSuccess,
    isLoading: courseLoading,
    data: courseData
  } = useGetOneCourse(id);

  if(courseSuccess){
    
  console.log(courseData)
  }

  const handleCurrentLesson = (event: Lesson) => {
    setCurrentLesson(event);
  };

  const navigate = useNavigate()

  useEffect(() => {
    if (!id || courseError){
      navigate("/home")
    }
  },[id, courseError, navigate])

  if (courseLoading) {
    return <Spinner/>
  } 

  return (
    <div id="HeaderClasses">
      <div data-testid="classes">
        <NavegationMax />
        <SideNav currentLesson={handleCurrentLesson} currentCourse={courseData} />
        <MainContent lesson={currentLesson} currentCourse={courseData} />
      </div>
    </div>
  );
}

export default Classes;
