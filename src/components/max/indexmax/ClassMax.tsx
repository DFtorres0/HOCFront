import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import "../../../assets/styles/indexmax/ClassmaxS.css";
import { Row, Col } from "react-bootstrap";

const Classmax = () => {
  return (
    <div className="my-module">
      <div className="my-text-block">
        <Row className="g-2">
          <Col md id="image-col">
            <img className="imageP2" src="../src/assets/images/img_1.jpg" loading="lazy" />
          </Col>
          <Col md id="my-text">
            <a href="/home" ><h6 className="T1c">CLASE</h6></a>
            <h3 className="T1t">Aprende hoy React Native</h3>
            <h6 className="T1">
              Aprende desde 0 framework's y domina y mundo de posibilidades en
              la web🌐.
            </h6>
            <DiReact className="my-icontT" />
            <SiJavascript className="my-icontT" />
            <h6 className="T1">Avanzado - abr 28, 2021</h6>
          </Col>
        </Row>
      </div>
      <div className="my-text-block-1">
        <Row className="g-2" >
          <Row>
            <Col id="image-col">
              <img className="imageP1" src="../src/assets/images/img_2.jpg" loading="lazy" />
            </Col>
            <Col id="my-text" >
              <a href="/home" ><h6 className="T2T">TUTORIA DE JAVASCRIPT</h6></a>
              <h6 className="T2">Practica JavaScript Hoy!</h6>
            </Col>
          </Row>
          <Row>
            <Col  id="image-col">
              <img className="imageP1" src="../src/assets/images/img_3.jpg" loading="lazy" />
            </Col>
            <Col id="my-text">
              <a href="/home" ><h6 className="T2T">TUTORIA DE VUE</h6></a>
              <h6 className="T2">Practica Vue hoy mismo</h6>
            </Col>
          </Row>
          <Row>
            <Col  id="image-col">
              <img className="imageP1" src="../src/assets/images/img_4.jpg" loading="lazy" />
            </Col>
            <Col  id="my-text">
              <a href="/home" ><h6 className="T2T">ILUSTRATOR</h6></a>
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
