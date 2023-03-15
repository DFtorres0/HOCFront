import "../../assets/styles/home/HomeHdStyle.css";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div id="header">
      <div className="intro">
        <Container className="intro-text">
          <h1>Home of code</h1>
          <p>Diseño Web • Aplicaciones • Soluciones TI • Product Design</p>
          <Link to="/indexmax" className="btn btn-custom btn-lg page-scroll">
            Saber mas
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Header;
