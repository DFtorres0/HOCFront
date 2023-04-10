import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import "../../../assets/styles/indexmax/IndexMaxS.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

const TestHeader = () => {
  const [navbarClass, setNavbarClass] = useState("transparent");

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === "transparent") {
      setNavbarClass("colored");
    } else if (currentPosition === 0 && navbarClass === "colored") {
      setNavbarClass("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <header>
      <Navbar
        className={navbarClass}
        fixed="top"
        bg="transparent"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/home">Home of Code</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#features" className="Header-NavbarLink">
              Inicio
            </Nav.Link>
            <Nav.Link href="#features" className="Header-NavbarLink">
              Clases
            </Nav.Link>
            <Nav.Link href="#features" className="Header-NavbarLink">
              Foros
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="Header-Navbar-1" fixed="top">
        <div className="Header-img">
          <div className="my-text-T">
            <h1 style={{ color: "#fff" }}>
              Aprende El Futuro Hoy 👨🏼‍💻Todo sobre lenguajes de programacion,
              informatica, tecnologia y mas🤓
            </h1>
          </div>
          <div className="my-module">
            <div className="my-text-block">
              <Row className="g-2">
                <Col md>
                  <img
                    src="../src/assets/images/img_1.jpg"
                    style={{
                      width: "250px",
                      height: "auto",
                    }}
                  />
                </Col>
                <Col md>
                  <h6 className="my-text">CLASE</h6>
                  <h3 className="my-text">Aprende hoy React Native</h3>
                  <h6 className="my-text">
                    Aprende desde 0 framework's y domina y mundo de
                    posibilidades en la web🌐.
                  </h6>
                  <h6 className="my-text">Avanzado - abr 28, 2021</h6>
                  <DiReact />
                  <SiJavascript />
                </Col>
              </Row>
            </div>
            <div className="my-text-block-1">
              <Row className="g-2">
                <Row>
                  <Col md>
                    <img
                      src="../src/assets/images/img_2.jpg"
                      style={{
                        width: "80px",
                        height: "auto",
                        margin: "5px",
                      }}
                    />
                  </Col>
                  <Col md>
                    <h6 className="my-text">TUTORIA DE JAVASCRIPT</h6>
                    <h6 className="my-text">Practica JavaScript Hoy!</h6>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <img
                      src="../src/assets/images/img_3.jpg"
                      style={{
                        width: "80px",
                        height: "auto",
                        margin: "5px",
                      }}
                    />
                  </Col>
                  <Col md>
                    <h6 className="my-text">TUTORIA DE VUE</h6>
                    <h6 className="my-text">Practica Vue hoy mismo</h6>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <img
                      src="../src/assets/images/img_4.jpg"
                      style={{
                        width: "80px",
                        height: "auto",
                        margin: "5px",
                      }}
                    />
                  </Col>
                  <Col md>
                    <h6 className="my-text">ILUSTRATOR</h6>
                    <h6 className="my-text">
                      Aprende a crear tus propias imagenes con Ilustrator🌄!
                    </h6>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default TestHeader;
