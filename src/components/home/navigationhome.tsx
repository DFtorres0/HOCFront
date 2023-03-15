import "../../assets/styles/home/homeNavStyle.css";
import { Navbar, Container, ListGroup } from "react-bootstrap";

import { BsCodeSlash } from "react-icons/bs";

const Navigation = () => {
  return (
    <Navbar fixed="top" id="menu" className="navbar-default">
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

        <div id="bs-example-navbar-collapse-1">
          <ListGroup className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                🏠 {"{Home}"}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                👽SobreNosotros
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">📋Portafolio™</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">📲Contactanos</a>
            </li>
          </ListGroup>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
