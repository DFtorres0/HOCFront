import { Link } from "react-router-dom";
import "../../assets/styles/home/HomeAbStyle.css";
import image from "/img/bg-header3.webp";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const HomeAbout = () => {
  return (
    <div id="about">
      <div className="container" style={{ color: "aliceblue" }}>
        <Container className="section-title text-center center">
          <Container className="h2">Sobre Nosotros</Container>
          <hr />
        </Container>
        <Col>
          <Row>
            <Container className="col-xs-12 col-md-6 img">
              <img
                style={{ height: "auto", width: "auto" }}
                src={image}
                alt="anonymous"
              />
            </Container>
            <Container className="col-xs-12 col-md-6">
              <Container className="p">
                Nos especializamos en proporcionar educación digital de alta calidad en
                diversas áreas de la programación y desarrollo de software.
                Ofrecemos una amplia gama de cursos interactivos, tutoriales y
                proyectos prácticos impartidos por expertos en la industria.
              </Container>
            </Container>
          </Row>
          <Row>
            <Container>
              <h4 className="tittle">
                <b>Los servicios clave incluyen</b>
              </h4>

              <ListGroup className="list" variant="flush" id="Lista">
                <ListGroup.Item id="list_Group">
                  <li>Cursos Diversificados</li>
                  <li>Aprendizaje Interactivo</li>
                  <li>Instructores Expertos</li>
                  <li>Comunidad de Estudiantes</li>
                  <li>Flexibilidad de Horario</li>
                </ListGroup.Item>
              </ListGroup>
            </Container>
            <Container className="ContainerButton">
              <Link
                to="#portfolio"
                className="a btn btn-default btn-lg page-scroll"
              >
                Mi Portafolio
              </Link>
            </Container>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default HomeAbout;
