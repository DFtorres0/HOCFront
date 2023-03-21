import { Button, Container, Form } from "react-bootstrap";
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
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/daniel_dmngz">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-codepen"></i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
