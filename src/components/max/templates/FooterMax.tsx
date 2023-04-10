import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/indexmax/FooterMaxS.css";
import {SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";

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
          <Col id="T-text" lg="4" md="12" className=" mb-md-0">
            <p >Siguenos:</p>

            <p className="T1">
              Si quieres estar enterado de nuestras ultimas tutorias, clases,
              practicas proyectos siguenos:😎
            </p>
            <p>
              <a href="/home" className="me-4 my-icon-share">
            <SiTwitter />
              </a>
              <a  href="/home" className="me-4 my-icon-share">
                <SiFacebook />
              </a>
              <a href="/home" className="my-icon-share">
                <SiLinkedin />
                </a>
            </p>
          </Col>

          <Col id="T-text" lg="3" md="6" className="mb-4 mb-md-0 mx-1">
            <p>Links Rapidos :🚀</p>

            <ul className="list-unstyled mb-0">
              <li>
                <a rel="preload" href="/indexmax" className="text-black">
                  Inicio
                </a>
              </li>
              <li>
                <a rel="preload" href="/tutorials" className="text-black">
                  📓 Clases
                </a>
              </li>
              <li>
                <a rel="preload" href="/testimonials" className="text-black">
                  💬 Foro
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0)", margin: "10%" }}
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
