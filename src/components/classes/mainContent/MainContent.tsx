import { Col, Row } from "react-bootstrap";
import { Lesson } from "../../../core/models/Lessons";
import MainCFooter from "./MainCFooter";
import MainCResource from "./MainCResource";
import MainCSections from "./mainCSections/MainCSections";
import Forum from "../../max/templates/Forum";

const MainContent = ({ lesson }: { lesson: Lesson | undefined }) => {
  return (
    <>
      
      <Row>
        <Col><MainCResource videoHTML={lesson? lesson.LessonContent:undefined} /><MainCSections/></Col>
        <Col><Forum isLesson ={true}/></Col>
      </Row>
      
      <MainCFooter />
    </>
  );
};

export default MainContent;
