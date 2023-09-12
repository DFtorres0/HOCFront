import "../../assets/styles/home/HomeNavStyle.css";
import { Navbar, Container, ListGroup, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { removeSessionToken } from "src/core/functions";
import { useNavigate } from "react-router-dom";

const HomeNavigation = () => {
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

  window.addEventListener("scroll", handleScroll);

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

  return (
    <Navbar
      fixed="top"
      id="menu"
      style={{
        height: `${height}%`,
        backgroundColor:
          navbarClass == "transparent" ? "transparent" : "#2d6166",
      }}
      className={`navbar-default ${navbarClass}`}
    >
      <Container>
        <div className="navbar-header">
          <a
            className="navbar-brand page-scroll"
            style={{ cursor: "pointer" }}
            href="#header"
          >
            <BsCodeSlash /> Home of code
          </a>
        </div>
        <NavDropdown
          title={<BsCodeSlash />}
          style={{ display: isMobile ? "" : "none", paddingRight: "auto" }}
        >
          <NavDropdown.Item href="/indexmax" id="navhover" className="word">
            <a href="#header" className="page-scroll">
              {"Home"}
            </a>
          </NavDropdown.Item>

          <NavDropdown.Item href="/testimonials" id="navhover">
            <a href="#about" className="page-scroll">
              SobreNosotros
            </a>
          </NavDropdown.Item>

          <NavDropdown.Item href="/tutorials" id="navhover">
            <a href="#portfolio" className="page-scroll">
              Portafolio
            </a>
          </NavDropdown.Item>

          <NavDropdown.Item href="/indexmax" id="navhover" className="word">
            <a href="#contact" className="page-scroll">
              Contactanos
            </a>
          </NavDropdown.Item>

          <NavDropdown.Item href="/testimonials" id="navhover">
            <a onClick={() => handleCloseSessions()} className="page-scroll">
              Salir
            </a>
          </NavDropdown.Item>
        </NavDropdown>
        <ListGroup
          style={{ display: isMobile ? "none" : "", paddingRight: "auto" }}
          className="nav navbar-nav navbar-right"
        >
          <li>
            <a href="#header" className="page-scroll">
              {"Home"}
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              SobreNosotros
            </a>
          </li>
          <li>
            <a href="#portfolio" className="page-scroll">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contactanos
            </a>
          </li>
          <li>
            <a onClick={() => handleCloseSessions()} className="page-scroll">
              Salir
            </a>
          </li>
        </ListGroup>
      </Container>
    </Navbar>
  );
};

export default HomeNavigation;
