import { useState } from "react";
import { Navbar, Container,Nav, ListGroup } from "react-bootstrap";
import "../../../assets/styles/indexmax/indexmaxS.css";
import { BsCodeSlash } from "react-icons/bs";

const NavigationMax = () => {
  const [navbarClass, setNavbarClass] = useState('transparent');

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === 'transparent') {
      setNavbarClass('colored');
    } else if (currentPosition === 0 && navbarClass === 'colored') {
      setNavbarClass('transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
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
             <h4> Inicio</h4>
            </Nav.Link>
            <Nav.Link href="#features" className="Header-NavbarLink">
            <h4> Clases</h4>
            </Nav.Link>
            <Nav.Link href="#features" className="Header-NavbarLink">
            <h4> Foros</h4>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavigationMax;
