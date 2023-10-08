import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../../assets/styles/indexmax/IndexMaxS.css";
import "../../../assets/styles/home/HomeNavStyle.css";
import { BsCodeSlash } from "react-icons/bs";
import { removeSessionToken } from "src/core/functions";
import { useNavigate } from "react-router-dom";

const NavigationMax = () => {
  const navigate = useNavigate();
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [height, setHeight] = useState("10");
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    if (currentPosition > 0 && navbarClass === "transparent") {
      setNavbarClass("colored");
      setHeight("7");
    } else if (currentPosition === 0 && navbarClass === "colored") {
      setNavbarClass("transparent");
      setHeight("10");
    }
  };

  const handleCloseSessions = () => {
    removeSessionToken();
    navigate("/login");
  };

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

  window.addEventListener("scroll", handleScroll);
  return (
    <Navbar
      className={`navbar-default maxmenu ${navbarClass}`}
      fixed="top"
      variant="dark"
      style={{ height: `${height}%` }}
      id="navbarMax"
      
    >
      <Container id="menu">
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
          <div style={{ display: "flex" }}>
            <NavDropdown
              title={<BsCodeSlash />}
              style={{ display: isMobile ? "" : "none", paddingRight: "auto" }}
            >
              <NavDropdown.Item href="/indexmax" id="navhover">
                <a href="/indexmax" className="page-scroll">
                  Inicio
                </a>
              </NavDropdown.Item>

              <NavDropdown.Item href="/testimonials" id="navhover">
                <a href="/testimonials" className="page-scroll">
                  Comunidad
                </a>
              </NavDropdown.Item>

              <NavDropdown.Item href="/tutorials" id="navhover" className="word">
                <a href="/tutorials" className="page-scroll">
                  Cursos
                </a>
              </NavDropdown.Item>

              <NavDropdown.Item href="/login" id="navhover">
                <a
                  onClick={() => handleCloseSessions()}
                  className="page-scroll"
                >
                  Salir
                </a>
              </NavDropdown.Item>
            </NavDropdown>
            <div style={{display: isMobile ? "none" : "flex"}}>
              <Nav.Link href="/indexmax" id="navhover" className="word">
                <Container className="p">Inicio</Container>
              </Nav.Link>
              <Nav.Link href="/testimonials" id="navhover">
                <Container className="p">Comunidad</Container>
              </Nav.Link>
              <Nav.Link href="/tutorials" id="navhover">
                <Container className="p">Cursos</Container>
              </Nav.Link>
              <Nav.Link
                onClick={() => handleCloseSessions()}
                href="/login"
                id="navhover"
              >
                <Container className="p">Salir</Container>
              </Nav.Link>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationMax;
