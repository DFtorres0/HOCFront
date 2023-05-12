import "../../assets/styles/home/HomeNavStyle.css";
import { Navbar, Container, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";

const HomeNavigation = () => {
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
      fixed="top"
      id="menu"
      style={{ height: `${height}%` }}
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
        <ListGroup className="nav navbar-nav navbar-right">
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
              Portafolio™
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contactanos
            </a>
          </li>
        </ListGroup>
      </Container>
    </Navbar>
  );
};

export default HomeNavigation;
