import { useState } from "react";
import { Navbar, Container, Nav, ListGroup } from "react-bootstrap";
import "../../../assets/styles/indexmax/IndexMaxS.css";
import { BsCodeSlash } from "react-icons/bs";

const NavigationMax = () => {
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [height, setHeight] = useState("10");

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === "transparent") {
      setNavbarClass("colored");
      setHeight("7");
    } else if (currentPosition === 0 && navbarClass === "colored") {
      setNavbarClass("transparent");
      setHeight("10");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <Navbar
      className={navbarClass}
      fixed="top"
      variant="dark"
      style={{ height: `${height}%` }}
      id="navbarMax"
    >
      <Container>
        <Navbar.Brand href="/home" id="navmaxhoc">
          <BsCodeSlash /> Home of Code{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav>
          <Nav.Link href="/indexmax" id="navhover" className="word">
            <Container className="p"> Inicio</Container>
          </Nav.Link>
          <Nav.Link href="/testimonials" id="navhover">
            <Container className="p">Foros</Container>
          </Nav.Link>
          <Nav.Link href="/tutorials" id="navhover">
            <Container className="p"> Cursos</Container>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMax;
