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
import { useState } from "react";
import { DiAngularSimple, DiReact, DiMysql } from "react-icons/di";
import { SiJavascript, SiPython, SiOracle } from "react-icons/si";
import {FiMenu} from "react-icons/fi";
import {HiPencilAlt} from "react-icons/hi";
import {FaGamepad} from "react-icons/fa";
import {IoIosApps} from "react-icons/io";
import { Link } from "react-router-dom";

const cursos = [
  {
    id: 0,
    name: "Angular",
    icon: <DiAngularSimple className="my-iconP-1" />,
    modalShow: false,
  },
  {
    id: 1,
    name: "React",
    icon: <DiReact className="my-iconP-2" />,
    modalShow: false,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript className="my-iconP-3" />,
    modalShow: false,
  },
  {
    id: 3,
    name: "Python",
    icon: <SiPython className="my-iconP-4" />,
    modalShow: false,
  },
  {
    id: 4,
    name: "SQL",
    icon: <DiMysql className="my-iconP-5" />,
    modalShow: false,
  },
  {
    id: 5,
    name: "Oracle",
    icon: <SiOracle className="my-iconP-1" />,
    modalShow: false,
  },
];

interface courseInterface {
  id: number;
  name: string;
  icon: JSX.Element;
  modalShow: boolean;
}

const HomePortfolio = () => {
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
            {course.icon}
          </Card.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleSetModal(course.id, false)}
          >
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
          icon: course.icon,
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
          <Container className="h2">Portafolio</Container>
          <hr />
        </div>
      </Container>
      <div className="categories">
        <Link className="a" to="#Alls"> Todo </Link>
        <Link className="a" to="#Front" >Front-End</Link>
        <Link className="a" to="#Back" >Back-End</Link>
        <Link className="a" to="#DataBase" >Bases de datos</Link>

        {" "}
        <div id="dotid" className ="dot"></div>
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
                  {curso.icon}
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

export default HomePortfolio;
