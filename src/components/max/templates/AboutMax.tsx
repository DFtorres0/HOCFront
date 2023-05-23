import "../../../assets/styles/indexmax/AboutMaxS.css";
import { DiIllustrator, DiPhotoshop, DiAngularSimple, DiReact } from "react-icons/di";
import { SiJavascript, SiVuedotjs, SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";
import { Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { relative } from "path";

const Topics = [
  { id: 0, name: "Illustrator" , icon: <DiIllustrator className="my-icon-1" /> },
  { id: 1, name: "Photoshop", icon: <DiPhotoshop className="my-icon-2"/>},
  { id: 2, name: "Angular", icon: <DiAngularSimple className="my-icon-3" /> },
  { id: 3, name: "JavaScript", icon: <SiJavascript className="my-icon-4"/> },
  { id: 4, name: "React", icon: <DiReact className="my-icon-5" /> },
  { id: 5, name: "Vue", icon: <SiVuedotjs className="my-icon-6" /> },
];

interface courseInterface {
  id: number;
  name: string;
  icon: JSX.Element;
}

const AboutMax = () => {

  const [courses, setCourses] = useState<courseInterface[]>([...Topics]);
  return (
    <div>
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <h2 className="my-text">BUSCA TU TEMA DE INTERÉS</h2>
      </div >
      <div className="my-container">
      <Row className="row">
        {courses.map((Topics, TopicsIndex) => (
          <Col key={TopicsIndex}>
            <Card
              className="card" style={{padding: ""}}>
              <Card.Body>{Topics.icon}
                <Card.Title className="my-card-text" id="buttons">
                  {Topics.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      <div>
        <div
          className="row mb-5 align-items-center"
          style={{ marginTop: "2%"}} id="buscador"
        >
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            style={{ margin: "20px auto", maxWidth: "400px"}}
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
              <a rel="preload"
                href="/home" 
                className="me-4 my-icon-share"
                style={{
                  marginLeft: "10%",
                }}
              >
                <SiTwitter />
              </a>
              <a rel="preload" href="/home" className="me-4 my-icon-share">
                <SiFacebook />
              </a>
              <a href="/home" className="my-icon-share">
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
