import "../../assets/styles/home/HomePfStyle.css";
import {
  Container,
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  Modal,
} from "react-bootstrap";
import ImgAngular from "../../assets/img/portfolio/AngularJS.png";
import { useState } from "react";

const cursos = [
  { id: 0, name: "Angular", modalShow: false },
  { id: 1, name: "React", modalShow: false },
  { id: 2, name: "JavaScript", modalShow: false },
  { id: 3, name: "Python", modalShow: false },
  { id: 4, name: "SQL", modalShow: false },
  { id: 5, name: "Oracle", modalShow: false },
];

interface courseInterface {
  id: number;
  name: string;
  modalShow: boolean;
}

const Portfolio = () => {
  const [courses, setCourses] = useState<courseInterface[]>([...cursos]);

  const ModalComponent = ({ course }: { course: courseInterface }) => {
    return (
      <Modal
        show={course.modalShow}
        onHide={() => course.modalShow}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{course.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Title>
            <Card.Img variant="bottom" src={ImgAngular} />
          </Card.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleSetModal(course.id, false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleSetModal = (id: number, show: boolean) => {
    const newCourses = cursos.map((course) => {
      if (course.id === id) {
        return {
          id: course.id,
          name: course.name,
          modalShow: show,
        };
      }
      return course;
    });
    setCourses(newCourses);
    console.log(newCourses);
  };

  return (
    <div id="portfolio">
      <Container>
        <div className="section-title text-center center">
          <h2>Portafolio™</h2>
          <hr />
        </div>
      </Container>
      <div className="categories">
        <ButtonGroup className="cat type">
          <Button variant="outline-dark" size="lg">
            Todo
          </Button>
          <Button variant="outline-dark" size="lg">
            Diseño Web
          </Button>
          <Button variant="outline-dark" size="lg">
            APP Modificadas
          </Button>
          <Button variant="outline-dark" size="lg">
            Juegos
          </Button>
        </ButtonGroup>
      </div>
      <Row className="row">
        {courses.map((curso, courseIndex) => (
          <Col key={courseIndex}>
            <Card
              bg="secondary"
              className="card"
              onClick={() => handleSetModal(curso.id, true)}
            >
              <Card.Header>{curso.name}</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Card.Img variant="bottom" style={{height: '100%', width: '100%'}} src={ImgAngular} />
                </Card.Title>
              </Card.Body>
            </Card>
            <ModalComponent course={curso} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
