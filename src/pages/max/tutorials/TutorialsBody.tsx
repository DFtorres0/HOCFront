import "../../../assets/styles/indexmax/ClassMaxS.css";
import { Card, Button, Container, Spinner, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useCourseList from "src/pages/hooks/useListCourses";
import { LoadingScreen } from "../Loader";

interface courseInterface {
  id: number;
  title: string;
  text: string;
  icon: JSX.Element;
  image: JSX.Element;
  image1: JSX.Element;
}

const TutorialsBody = () => {
  const navigate = useNavigate();

  const {
    data: courseList,
    isSuccess: courseListSuccess,
    isLoading: courseListLoading,
  } = useCourseList();

  return (
    <div>
      <div>
        <div style={{ marginTop: "10%" }}>
          <h2 className="my-text">Tutorias, Clases y Practicas</h2>
        </div>
      </div>
      <Row style={{ minHeight: "100vh" }}>
        {courseListLoading ? (
          <LoadingScreen />
        ) : (
          courseList?.map((course, courseIndex) => (
            <Col style={{ minWidth: "32vw" }} key={courseIndex}>
              <Card
                bg="info"
                style={{ width: "25vw", minHeight: "30vh" }}
              >
                <Card.Header>{course.courseName}</Card.Header>
                <Card.Body>
                  <Card.Title>{course.courseDuration} horas</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/classes/${course?.courseId}`)}
                  >
                    Quiero ir!
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default TutorialsBody;
