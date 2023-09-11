import "../../assets/styles/home/HomePfStyle.css";
import {
  Container,
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  Modal,
  Spinner,
} from "react-bootstrap";
import { useState, FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCourseList from "../hooks/useListCourses";

interface ModalComponentProps {
  modalShow: boolean;
  setModalShow: () => void;
  course?: Course;
}

const ModalComponent: FC<ModalComponentProps> = ({
  modalShow,
  setModalShow,
  course,
}) => {
  const navigate = useNavigate();
  return (
    <Modal show={modalShow} backdrop="static" keyboard={false} centered>
      <Modal.Header
        style={{
          backgroundColor: "#2d6166",
          borderColor: "#183d41",
          color: "aliceblue",
        }}
      >
        <Modal.Title>{course?.courseName}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "#2d6166",
          borderColor: "#183d41",
          color: "aliceblue",
        }}
      >
        <Card.Title>{course?.courseDescription}</Card.Title>
      </Modal.Body>
      <Modal.Footer
        style={{ backgroundColor: "#2d6166", borderColor: "#183d41" }}
      >
        <Button
          variant="primary"
          onClick={() => navigate(`/classes/${course?.courseId}`)}
        >
          Quiero ir!
        </Button>
        <Button variant="secondary" onClick={setModalShow}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

interface CourseListWithShowModal {
  Course: Course;
  modalShow: boolean;
}

const HomePortfolio: FC = () => {
  const [courses, setCourses] = useState<CourseListWithShowModal[]>([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();

  const {
    data: courseList,
    isSuccess: courseListSuccess,
    isLoading: courseListLoading,
  } = useCourseList();

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleSetSelectedCourse = (actualCourse: Course) => {
    setSelectedCourse(actualCourse);
    setModalShow(true);
  };

  useEffect(() => {
    if (courseListSuccess && courseList) {
      const updatedCourses: CourseListWithShowModal[] = courseList.map(
        (course) => ({
          Course: course,
          modalShow: false, // Initializing modalShow as false
        })
      );
      setCourses(updatedCourses);
    }
  }, [courseListSuccess, courseList]);

  return (
    <div id="portfolio">
      <Container>
        <div className="section-title text-center center">
          <Container className="h2">Portafolio</Container>
          <hr />
        </div>
      </Container>
      <div className="categories">
        <Link className="a" to="#Alls">
          {" "}
          Todo{" "}
        </Link>
        <Link className="a" to="#Front">
          Front-End
        </Link>
        <Link className="a" to="#Back">
          Back-End
        </Link>
        <Link className="a" to="#DataBase">
          Bases de datos
        </Link>{" "}
        <div id="dotid" className="dot"></div>
      </div>
      {courseListLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="row">
          {courseList?.map((course, courseIndex) => (
            <Col key={courseIndex}>
              <Card
                bg="info"
                className="card"
                onClick={() => handleSetSelectedCourse(course)}
              >
                <Card.Header>{course.courseName}</Card.Header>
                <Card.Body>
                  <Card.Title>{course.courseDuration} lecciones</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <ModalComponent
            modalShow={modalShow}
            course={selectedCourse}
            setModalShow={handleCloseModal}
          />
        </Row>
      )}
    </div>
  );
};

export default HomePortfolio;
