import { Button, Container, Form } from "react-bootstrap";
import { FaCodepen, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import "../../assets/styles/home/HomeCtStyle.css";

const Contact = () => {
  return (
    <div id="contact" className="text-center">
      <div className="section-title center">
        <h2>Contactanos</h2>
        <hr />
      </div>
      <Container>
        <Container>
          <Form action="https://wa.me/573165363587" method="get">
            <Form.Group className="mb-3" controlId="form">
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Dime como quieres tu proxima Pagina web o como te puedo ayudar!"
              />
            </Form.Group>
            <Button className="btn btn-default btn-lg" type="submit">
              <div>💻 Enviar!</div>
            </Button>
          </Form>
        </Container>

        <div className="social">
          <ul>
            <li>
              <a href="#header">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/daniel_dmngz">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#header">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#header">
                <FaCodepen />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
