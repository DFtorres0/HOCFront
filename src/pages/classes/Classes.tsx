import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/classes/ClassesHdStyle.css";
import NavigationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";
import useGetOneCourse from "../hooks/useGetOneCourse";
import { LoadingScreen } from "src/pages/max/Loader";
import useCreateAvailableCourse from "./hooks/useCreateAvailableCourse";
import { getDecodedToken } from "src/core/functions";
import { Container } from "react-bootstrap";
import MainCFooter from "./mainContent/MainCFooter";
import ClassQuiz from "./ClassQuiz";
import CertificateViewer from "./ClassCertificate";
import useGetLessonProgress from "./hooks/useGetLessonProgress";

function Classes() {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>();
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>();
  const [certificate, setCertificate] = useState<boolean | null>();
  const [quizCompleted, setQuizCompleted] = useState<boolean | null | undefined>();

  const { id } = useParams<Record<string, string>>();

  const {
    mutate: createAvailableCourse,
    isError: createAvailableCourseError,
    isSuccess: createAvailableCourseSuccess,
  } = useCreateAvailableCourse();

  const {
    error: courseError,
    isSuccess: courseSuccess,
    isLoading: courseLoading,
    data: courseData,
    refetch,
  } = useGetOneCourse(id);


  const handleCurrentLesson = (event: Lesson | null) => {
    setCurrentLesson(event);
  };

  const handleCurrentQuiz = (event: Quiz | null) => {
    setCurrentQuiz(event);
  };

  const handleCertificate = (event: boolean | null) => {
    setCertificate(event);
  };
  
  const handleQuizCompleted = (event: boolean | null) => {
    setQuizCompleted(event);
  };


  const navigate = useNavigate();

  useEffect(() => {
    if (!id || courseError) {
      navigate("/home");
    }
    if (id) {
      createAvailableCourse({
        userId: getDecodedToken().sub,
        courseId: Number(id),
      });
      refetch();
    }
  }, [id, courseError, navigate, refetch]);

  if (courseLoading) {
    return <LoadingScreen />;
  }

  return (
    <div id="HeaderClasses">
      <div data-testid="classes">
        <NavigationMax />
        <SideNav
          currentLesson={handleCurrentLesson}
          currentQuiz={handleCurrentQuiz}
          certificate={handleCertificate}
          quizCompleted={quizCompleted}
          currentCourse={courseData}
        />
        {currentLesson != null ? (
          <MainContent lesson={currentLesson} currentCourse={courseData} />
        ) : currentQuiz != null ? (
          <div
            style={{
              minHeight: "100vh",
              maxWidth: "99vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              style={{
                textAlign: "left",
                color: "aliceblue",
                marginTop: "80px",
              }}
            >
              <ClassQuiz quiz={currentQuiz} quizCompleted={handleQuizCompleted} />
            </Container>
            <MainCFooter />
          </div>
        ) : certificate && courseData ? (
          <div
            style={{
              minHeight: "100vh",
              maxWidth: "99vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              style={{
                textAlign: "center",
                color: "aliceblue",
                marginTop: "80px",
              }}
              className="h1"
            >
              <CertificateViewer
                courseName={courseData.courseName}
                userName={getDecodedToken().name}
              ></CertificateViewer>
            </Container>
            <MainCFooter />
          </div>
        ) : (
          <div
            style={{
              minHeight: "100vh",
              maxWidth: "99vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              style={{
                textAlign: "center",
                color: "aliceblue",
                marginTop: "80px",
                fontSize: "10vw",
              }}
              className="h1"
            >
              Elige una leccion
            </Container>
            <MainCFooter />
          </div>
        )}
      </div>
    </div>
  );
}

export default Classes;
