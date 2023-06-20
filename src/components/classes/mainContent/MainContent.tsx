import { Col, Container, Row } from "react-bootstrap";
import { Lesson } from "../../../core/models/Lessons";
import MainCFooter from "./MainCFooter";
import MainCResource from "./MainCResource";
import MainCSections from "./mainCSections/MainCSections";
import Forum from "../../max/templates/Forum";
import { MainCourseMock } from "../../../core/models/MainCourseMock";

const MainContent = ({ lesson }: { lesson: Lesson | undefined }) => {
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
        {MainCourseMock[0].Course.CourseName}:
        <Container
          style={{
            paddingTop:"15px"
          }}
          className="h2"
        >
          {lesson?.LessonTitle}
        </Container>
      </Container>
      <Row style={{ width: "94vw", padding: "0", paddingLeft: "4vw" }}>
        <Col style={{ minWidth: "60vw" }}>
          <MainCResource
            videoHTML={lesson ? lesson.LessonContent : undefined}
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
