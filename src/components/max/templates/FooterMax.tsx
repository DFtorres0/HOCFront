import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/indexmax/aboutmaxS.css";

const FooterMax = () => {
  return (
    <footer
      color="primary"
      className="text-Black text-center text-lg-left"
      style={{
        marginTop: "10%",
      }}
    >
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Siguenos:</h5>

            <p>
              Si quieres estar enterado de nuestras ultimas tutorias, clases,
              practicas proyectos siguenos:😎
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links Rapidos :🚀</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/indexmax" className="text-black">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-black">
                  📓 Clases
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-black">
                  💬 Foro
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        Copyright © 2023 . Diseñado Por:
        <a className="text-dark" href="/home">
          Home of Code ™.
        </a>
      </div>
    </footer>
  );
};

export default FooterMax;
