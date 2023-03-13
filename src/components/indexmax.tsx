import { useState } from "react";
import "../assets/styles/indexmax.css";
import "../assets/images/bg_3.jpg";
import {
  Navbar,
  Container,
  Collapse,
  NavItem,
  NavLink,
  Button,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

function Indexmax() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <Navbar
        fixed="top"
        bg="transparent"
        variant="dark"
        style={{ position: "fixed", width: "100%", zIndex: "1" }}
      >
        <Container>
          <Navbar.Brand href="#home">Home of Code</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#features" style={{ marginRight: "30px" }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#features" style={{ marginRight: "30px" }}>
              Clases
            </Nav.Link>
            <Nav.Link href="#features" style={{ marginRight: "30px" }}>
              Foros
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        fixed="top"
        style={{ padding: 0, margin: 0, position: "relative", zIndex: "0" }}
      >
        <div
          style={{
            backgroundImage: `url(../src/assets/images/bg_3.jpg)`,
            backgroundPosition: "center",
            width: "100%",
            position: "relative",
            backgroundSize: "cover",
            height: "100vh",
            
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: "1",
            }}
          >
            <h1 style={{ color: "#fff" }}>
              Aprende El Futuro Hoy 👨🏼‍💻Todo sobre lenguajes de programacion,
              informatica, tecnologia y mas🤓
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "64%",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row className="g-2">
                <Col md>
                  <h1>informatica, tecnologia y mas🤓</h1>
                </Col>
                <Col md>
                  <h1>Aprende El Futuro Hoy 👨🏼‍💻</h1>
                </Col>
              </Row>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "34%",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row className="g-2">
                <Col md>
                  <h1>informatica, tecnologia y mas🤓</h1>
                </Col>
                <Col md>
                  <h1>Aprende El Futuro Hoy 👨🏼‍💻</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
    
  );
}

export default Indexmax;
