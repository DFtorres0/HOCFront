import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  ListGroup,
  NavDropdown,
} from "react-bootstrap";
import "../../../assets/styles/indexmax/IndexMaxS.css";
import { BsCodeSlash } from "react-icons/bs";

const NavigationMax = () => {
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [height, setHeight] = useState("10");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      <Container >
        <Navbar.Brand
          href="/home"
          id="navmaxhoc"
          style={{ fontSize: isMobile ? "13px" : "" }}
        >
          <BsCodeSlash /> Home of Code{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav>
          <NavDropdown
            title={<BsCodeSlash />}
            style={{ display: isMobile ? "" : "none" , paddingRight:"auto"}}
          >
            <NavDropdown.Item href="/indexmax" id="navhover" className="word">
              <Container className="p">Inicio</Container>
            </NavDropdown.Item>

            <NavDropdown.Item href="/testimonials" id="navhover">
              <Container className="p">Comunidad</Container>
            </NavDropdown.Item>

            <NavDropdown.Item href="/tutorials" id="navhover">
              <Container className="p">Cursos</Container>
            </NavDropdown.Item>
          </NavDropdown>
          <div style={{display:isMobile?"none":"flex"}}>
          <Nav.Link href="/indexmax" id="navhover" className="word">
            <Container className="p">Inicio</Container>
          </Nav.Link>
          <Nav.Link href="/testimonials" id="navhover">
            <Container className="p">Comunidad</Container>
          </Nav.Link>
          <Nav.Link href="/tutorials" id="navhover">
            <Container className="p">Cursos</Container>
          </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMax;
