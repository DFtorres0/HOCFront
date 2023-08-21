import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "../../assets/styles/classes/ClassesSNavStyle.css";
import { useState } from "react";
import { CoursesMock } from "../../core/models/MainCourseMock";

type ClassSideNavProps = {
  currentLesson: (data: Lesson) => void;
}

const ClassSideNav: React.FC<ClassSideNavProps> = ({ currentLesson }) => {
  const [navClass, setNavClass] = useState("close");

  const handleCurrentLesson = (lesson: Lesson) => {
    currentLesson(lesson)
  }

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
          <Col onClick={handleToggleNav}>
            <BiRightArrow className="toggle icon" />
          </Col>
          <Col>
            <div id="navprymarytext" className="text nav-text">
              Course Name
            </div>
          </Col>
        </Container>
        <Container className="menu-bar">
          {CoursesMock[1]?.modules.map((module, moduleIndex) => (
            <Row key={moduleIndex} className="menu">
              <div className="module-number icon">{moduleIndex + 1}</div>
              <ListGroup className="menu-links">
                {module.Lessons.map((lesson, lessonIndex) => (
                  <div style={{cursor: "pointer"}} onClick={() => handleCurrentLesson(lesson)} key={lessonIndex} className="a">
                    <div className="icon classIcon">{lessonIndex + 1}</div>
                    <span className="text">{lesson.LessonTitle}</span>
                  </div>
                ))}
              </ListGroup>
            </Row>
          ))}
        </Container>
      </Nav>
    </div>
  );
};

export default ClassSideNav;
