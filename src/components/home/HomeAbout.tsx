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
                Ponemos a dispocicion diferentes soluciones tecnologicas como es
                el diseño de paginas web o desarrollo web, aplicaciones
                modificadas , diseño de aplicaciones para diferentes
                plataformas, trabajamos FRONT-END,tenemos conocimiento en los
                ultimos legunajes de programacion, ultimas tecnologia entre
                otros servicios.
              </Container>
            </Container>
          </Row>
          <Row>
            <Container>
              <h4 className="tittle">
                <b>Nos especializamos en los siguientes servicios</b>
              </h4>

              <ListGroup className="list" variant="flush" id="Lista">
                <ListGroup.Item id="list_Group">
                  <li>
                    Diseño de Pagina Web RESPONSIVE DESIGN adaptable a cualquier
                    dispositivo (celular, tablets, ordenadores).
                  </li>
                  <li>Activacion de Windows, Office y diferentes programas.</li>
                  <li>Modificacion de Aplicaciones SO Android.</li>
                  <li>Cualquier tipo de Suscripción.</li>
                  <li>Videojuegos de Xbox y PC.</li>
                  <li>Soluciones TI.</li>
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
