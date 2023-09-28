import {
  Container,
  ListGroup,
  Modal,
  ModalBody,
  Nav,
  Row,
} from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import "../../assets/styles/classes/ClassesSNavStyle.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetLessonProgress from "./hooks/useGetLessonProgress";
import { getDecodedToken } from "src/core/functions";
import useCreateLessonProgress from "./hooks/useCreateLessonProgress";
import CertificateViewer from "./ClassCertificate";
import useGetCourseProgress from "./hooks/useGetCourseProgress";

type ClassSideNavProps = {
  currentLesson: (data: Lesson | null) => void;
  currentQuiz: (data: Quiz | null) => void;
  certificate: (data: boolean | null) => void;
  currentCourse?: Course;
  quizCompleted?: boolean | null | undefined;
};

const ClassSideNav: React.FC<ClassSideNavProps> = ({
  currentLesson,
  currentQuiz,
  certificate,
  currentCourse,
  quizCompleted
}) => {
  const [navClass, setNavClass] = useState("close");
  const [userId, setUserId] = useState();
  const [lessonId, setLessonId] = useState<number | undefined>();
  
  let lessonIdd: number | undefined = 0

  const {
    error: lessonProgressError,
    isSuccess: lessonProgressSuccess,
    isLoading: lessonProgressLoading,
    data: lessonProgressData,
  } = useGetLessonProgress(userId, lessonId);

  const {
    error: courseProgressError,
    isSuccess: courseProgressSuccess,
    isLoading: courseProgressLoading,
    data: courseProgressData
  } = useGetCourseProgress(userId, currentCourse?.courseId)
  
  const {
    mutate: createLessonProgress,
    isError: createLessonProgressError,
    isSuccess: createLessonProgressSuccess,
  } = useCreateLessonProgress();

  const handleCurrentQuiz = (quiz: Quiz) => {
    currentLesson(null);
    certificate(null);
    currentQuiz(quiz);
  };

  const handleCurrentLesson = (lesson: Lesson) => {
    setLessonId(lesson.lessonId);
    setUserId(getDecodedToken().sub);
    if (lessonProgressSuccess) {
      if (lessonProgressData[0]?.completed != true) {
        createLessonProgress({
          userId: getDecodedToken().sub,
          lessonId: lesson.lessonId,
          completed: true,
        });
      }
    }
    currentQuiz(null);
    certificate(null);
    currentLesson(lesson);
  };

  const handleCertificate = () => {
    let completedLessons = 0;
    if(courseProgressSuccess){
      courseProgressData.forEach((lesson) => {
        if(lesson.completed) completedLessons++
      })
    }
    console.log(completedLessons, courseProgressData?.length)

    if (completedLessons == courseProgressData?.length && quizCompleted) {
      currentLesson(null);
      currentQuiz(null);
      certificate(true);
    } else {
      alert("Faltan lecciones o quices por completar");
    }
  };

  const handleToggleNav = () => {
    setNavClass(navClass === "" ? "close" : "");
  };

  return (
    <div id="snav">
      <Nav className={`sidebar ${navClass}`}>
        <Container className="header">
          <BiRightArrow onClick={handleToggleNav} className="toggle icon" />
        </Container>
        <div
          style={{ paddingLeft: "10px", marginTop: "35px" }}
          id="navprymarytext"
          className="text nav-text"
        >
          {currentCourse ? currentCourse.courseName : "Undefined"}
        </div>
        <Container style={{ overflowX: "hidden" }} className="menu-bar">
          {currentCourse ? (
            currentCourse.modules?.map((module, moduleIndex) => (
              <Row
                key={moduleIndex}
                style={{
                  width: "100%",
                  margin: "0",
                  marginLeft: navClass == "close" ? "0" : "1rem",
                }}
              >
                <div
                  style={{
                    justifyContent:
                      navClass != "close" ? "flex-start" : "center",
                  }}
                  className="module-number icon"
                >
                  {moduleIndex +
                    1 +
                    `${navClass != "close" ? ".  " + module.moduleName : ""}`}
                </div>
                <ListGroup className="menu-links">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCurrentLesson(lesson)}
                      key={lessonIndex}
                      className="a"
                    >
                      <div className="icon classIcon">{lessonIndex + 1}</div>
                      <span className="text">{lesson.lessonTitle}</span>
                    </div>
                  ))}
                  {module.quizzes.map((quiz, quizIndex) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCurrentQuiz(quiz)}
                      key={quizIndex}
                      className="a"
                    >
                      <div className="icon classIcon">{quizIndex + 1}</div>
                      <span className="text">{quiz.quizName}</span>
                    </div>
                  ))}
                </ListGroup>
              </Row>
            ))
          ) : (
            <Row />
          )}
          <Row
            style={{
              width: "100%",
              margin: "0",
              marginLeft: navClass == "close" ? "0" : "1rem",
            }}
          >
            <GiGraduateCap
              className="module-number icon"
              onClick={() => handleCertificate()}
            />
          </Row>
        </Container>
      </Nav>
    </div>
  );
};

export default ClassSideNav;
