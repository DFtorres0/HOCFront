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

          <Col id="Text_container" lg="3" md="6" className="mb-4 mb-md-0 mx-1">
            <p>Links Rapidos :</p>

            <ul className="list-unstyled mb-0" id="unorder_list">
              <li>
                <a rel="preload" href="/indexmax" className="unorder_a" id="a_footer">
                  Inicio
                </a>
              </li>
              <li>
                <a rel="preload" href="/tutorials" className="unorder_a" style = {{color: "#fff"}}>
                  Clases
                </a>
              </li>
              <li>
                <a rel="preload" href="/testimonials" className="unorder_a">
                  Foro
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="copyright">
        Copyright © 2023 . Diseñado Por:{" "}
        <a className="copyright_text" href="/home">
          Home of Code ™.
        </a>
      </div>
    </footer>
  );
};

export default FooterMax;
