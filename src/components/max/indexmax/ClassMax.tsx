import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import "../../../assets/styles/indexmax/indexmaxS.css";
import { Row, Col } from "react-bootstrap";

const Classmax = () => {
  return (
    <div className="my-module">
      <div className="my-text-block">
        <Row className="g-2">
          <Col md id="imageP">
            <img className="imageP2" src="../src/assets/images/img_1.jpg" />
          </Col>
          <Col md id="my-text">
            <h6 className="T1c">CLASE</h6>
            <h3 className="T1">Aprende hoy React Native</h3>
            <h6 className="T1">
              Aprende desde 0 framework's y domina y mundo de posibilidades en
              la web🌐.
            </h6>
            <h6 className="T1">Avanzado - abr 28, 2021</h6>
            <DiReact className="my-icontT" />
            <SiJavascript className="my-icontT" />
          </Col>
        </Row>
      </div>
      <div className="my-text-block-1">
        <Row className="g-2">
          <Row>
            <Col md id="imageP">
              <img
                className="imageP1"
                style={{
                  marginTop: "15px",
                }}
                src="../src/assets/images/img_2.jpg"
              />
            </Col>
            <Col md id="my-text">
              <h6 className="T2T">TUTORIA DE JAVASCRIPT</h6>
              <h6 className="T2">Practica JavaScript Hoy!</h6>
            </Col>
          </Row>
          <Row>
            <Col md id="imageP">
              <img className="imageP1" src="../src/assets/images/img_3.jpg" />
            </Col>
            <Col md id="my-text">
              <h6 className="T2">TUTORIA DE VUE</h6>
              <h6 className="T2">Practica Vue hoy mismo</h6>
            </Col>
          </Row>
          <Row>
            <Col md id="imageP">
              <img className="imageP1" src="../src/assets/images/img_4.jpg" />
            </Col>
            <Col md id="my-text">
              <h6 className="T2">ILUSTRATOR</h6>
              <h6 className="T2">
                Aprende a crear tus propias imagenes con Ilustrator🌄!
              </h6>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Classmax;
