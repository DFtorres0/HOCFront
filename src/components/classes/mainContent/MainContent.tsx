import { Col, Container, Row } from "react-bootstrap";
import MainCFooter from "./MainCFooter";
import MainCResource from "./MainCResource";
import MainCSections from "./mainCSections/MainCSections";
import Forum from "../../max/templates/Forum";
import { CoursesMock } from "../../../core/models/MainCourseMock";
import { useEffect, useState } from "react";

const MainContent = ({ lesson }: { lesson: Lesson | undefined }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div
      style={{
        minHeight: "99.8vh",
        maxWidth: "99vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        style={{
          textAlign: "left",
          color: "aliceblue",
          display: "flex",
          marginTop: "80px",
          alignItems: "center"
        }}
        className="h1"
      >
        {CoursesMock[0].CourseName}:
        <Container
          style={{
            paddingTop:"15px"
          }}
          className="h2"
        >
          {lesson?.LessonTitle}
        </Container>
      </Container>
      <Row style={{ width: "94vw", padding: "0", paddingLeft: "45px", display:"flex",flexDirection:isMobile?"column":undefined}}>
        <Col style={{ minWidth: "60vw" }}>
          <MainCResource
            videoHTML={lesson?lesson.LessonContent: undefined}
          />
          <MainCSections lesson={lesson} />
        </Col>
        <Col style={{ margin: "0", padding: "0", marginTop: "2vh" }}>
          <Forum isLesson={true} />
        </Col>
      </Row>

      <MainCFooter />
    </div>
  );
};

export default MainContent;
