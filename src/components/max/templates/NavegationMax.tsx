import { useState } from "react";
import { Navbar, Container,Nav, ListGroup } from "react-bootstrap";
import "../../../assets/styles/indexmax/indexmaxS.css";

const NavigationMax = () => {
  const [navbarClass, setNavbarClass] = useState('transparent');
  const [height, setHeight] = useState('10');

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === 'transparent') {
      setNavbarClass('colored');
      setHeight('7');
    } else if (currentPosition === 0 && navbarClass === 'colored') {
      setNavbarClass('transparent');
      setHeight('10');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <Navbar
        className={navbarClass}
        fixed="top"
        variant="dark"
        style={{height: `${height}%`}}
        id="navbarMax"
      >
        <Container>
          <Navbar.Brand href="/home">Home of Code</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav>
            <Nav.Link href="/indexmax" className="navlink">
             <h4> Inicio</h4>
             <hr/>
            </Nav.Link>
            <Nav.Link href="/tutorials" className="navlink">
            <h4> 📓 Clases</h4>
             <hr/>
            </Nav.Link>
            <Nav.Link href="/testimonials" className="navlink">
            <h4> 💬 Foros</h4>
             <hr/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavigationMax;
