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
        <Container style={{overflow: "hidden"}} className="menu-bar">
          {CoursesMock[1]?.modules.map((module, moduleIndex) => (
            <Row key={moduleIndex} style={{width: "100%", margin: "0", marginLeft:navClass=="close"?"0":"1rem"}}>
              <div style={{justifyContent: "flex-start"}} className="module-number icon">{moduleIndex + 1 + `.  ${navClass!="close"?module.moduleName: " "}`}</div>
              <ListGroup className="menu-links">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div style={{cursor: "pointer"}} onClick={() => handleCurrentLesson(lesson)} key={lessonIndex} className="a">
                    <div className="icon classIcon">{lessonIndex + 1}</div>
                    <span className="text">{lesson.lessonTitle}</span>
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
