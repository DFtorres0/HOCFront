import "../../../assets/styles/indexmax/aboutmaxS.css";
import { DiIllustrator } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { Row, Col, Card } from "react-bootstrap";
const AboutMax = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <h5 className="my-text">TUTORIAL DE CURSOS!💎</h5>
        <h2 className="my-text">Busca tu tema de interes:</h2>
      </div>
      <div className="my-container">
        <Row className="my-row row-cols-md-7 g-0">
          <Col>
            <Card className="my-card">
              <Card.Body>
                <DiIllustrator className="my-icon-1" />
                <Card.Title className="my-text-icon">Illustrator</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-card">
              <Card.Body>
                <DiPhotoshop className="my-icon-2" />
                <Card.Title className="my-text-icon">Photoshop</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-card">
              <Card.Body>
                <DiAngularSimple className="my-icon-3" />
                <Card.Title className="my-text-icon">Angular</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-card">
              <Card.Body>
                <SiJavascript className="my-icon-4" />
                <Card.Title className="my-text-icon">JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-card">
              <Card.Body>
                <DiReact className="my-icon-5" />
                <Card.Title className="my-text-icon">React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-card">
              <Card.Body>
                <SiVuedotjs className="my-icon-6" />
                <Card.Title className="my-text-icon">Vue</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <div
          className="row mb-5 align-items-center"
          style={{ marginTop: "8%" }}
        >
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            style={{ margin: "20px auto", maxWidth: "400px" }}
          >
            <form action="#" className="d-flex search-form">
              <span className="icon-"></span>
              <input
                type="search"
                className="form-control mr-2"
                placeholder="Busquemos 🔍"
              />
              <input
                type="submit"
                className="btn btn-primary px-4"
                value="Buscar!"
                style={{ marginLeft: "10px", width: "1o0px" }}
              />
            </form>
          </div>
          <div className="col-lg-6 text-lg-right">
            <div className="d-inline-flex align-items-center ml-auto">
              <span className="mr-4">Compartir: </span>
              <a
                href=""
                className="me-4 my-icon-share"
                style={{
                  marginLeft: "10%",
                }}
              >
                <SiTwitter />
              </a>
              <a href="" className="me-4 my-icon-share">
                <SiFacebook />
              </a>
              <a href="" className="my-icon-share">
                <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMax;
