import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/classes/ClassesHdStyle.css";
import NavigationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";
import useGetOneCourse from "../hooks/useGetOneCourse";
import { Spinner } from "react-bootstrap";

function Classes() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>();

  const { id } = useParams<Record<string, string>>();
  console.info("Id from the params:", id);

  const {
    error: courseError,
    isSuccess: courseSuccess,
    isLoading: courseLoading,
    data: courseData,
    refetch,
  } = useGetOneCourse(id);

  const handleCurrentLesson = (event: Lesson) => {
    setCurrentLesson(event);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!id || courseError) {
      navigate("/home");
    }
    if (id) refetch();
  }, [id, courseError, navigate, refetch]);

  if (courseLoading) {
    return <Spinner />;
  }

  return (
    <div id="HeaderClasses">
      <div data-testid="classes">
        <NavigationMax />
        <SideNav
          currentLesson={handleCurrentLesson}
          currentCourse={courseData}
        />
        <MainContent lesson={currentLesson} currentCourse={courseData} />
      </div>
    </div>
  );
}

export default Classes;
