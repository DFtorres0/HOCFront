import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "../../assets/styles/classes/ClassesSNavStyle.css";
import { useState } from "react";

type ClassSideNavProps = {
  currentLesson: (data: Lesson) => void;
  currentCourse?: Course;
};

const ClassSideNav: React.FC<ClassSideNavProps> = ({
  currentLesson,
  currentCourse,
}) => {
  const [navClass, setNavClass] = useState("close");

  const handleCurrentLesson = (lesson: Lesson) => {
    currentLesson(lesson);
  };

  const handleToggleNav = () => {
    if (navClass === "") {
      setNavClass("close");
    } else {
      setNavClass("");
    }
  };

  return (
    <div id="snav">
      <Nav className={`sidebar ${navClass}`}>
        <Container className="header">
          <BiRightArrow onClick={handleToggleNav} className="toggle icon" />
        </Container>
        <div
          style={{ paddingLeft: "10px", marginTop: "35px"}}
          id="navprymarytext"
          className="text nav-text"
        >
          {currentCourse ? currentCourse.courseName : "Undefined"}
        </div>
        <Container style={{ overflowX: "hidden" }} className="menu-bar">
          {currentCourse ? (
            currentCourse.modules.map((module, moduleIndex) => (
              <Row
                key={moduleIndex}
                style={{
                  width: "100%",
                  margin: "0",
                  marginLeft: navClass == "close" ? "0" : "1rem",
                }}
              >
                <div
                  style={{ justifyContent: navClass != "close" ?"flex-start":"center" }}
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
                </ListGroup>
              </Row>
            ))
          ) : (
            <Row />
          )}
        </Container>
      </Nav>
    </div>
  );
};

export default ClassSideNav;
