import {
  Button,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import "../assets/styles/loginForm.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Login(): JSX.Element {
  return (
    <div id="login" data-testid="login" >
      <div className="login">
        <Row className="other">
          <Col className="mb-5 mt-5">
            <Container className="d-flex flex-column ms-1">
              <Container className="text-center mt-1 h4 mb-5 pb-1">
                Login
              </Container>
              <Container className="text-center p mb-3 pb-1">
                Por favor inicia sesion en tu cuenta
              </Container>
              <FormGroup className="needs-validation">
                <Container className="form-group mb-4">
                  <FloatingLabel
                    style={{ width: "70%" }}
                    className="form-label"
                    controlId="floatingUser"
                    label="Usuario"
                  >
                    <FormControl
                      type="text"
                      className="form-control"
                      placeholder="Usuario"
                      aria-label="Username"
                    />
                  </FloatingLabel>
                </Container>

                <Container className="form-group mb-4">
                  <FloatingLabel
                    style={{ width: "70%" }}
                    className="form-label"
                    controlId="floatingPassword"
                    label="Contraseña"
                  >
                    <FormControl
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      aria-label="Password"
                    />
                  </FloatingLabel>
                  <InputGroup className="form-label"></InputGroup>
                </Container>
                <Container
                  style={{ display: "flex" }}
                  className="form-group form-check mb-4"
                >
                  <Form.Check
                    type={"checkbox"}
                    id={"RememberMeCheckbox"}
                    label={"Recuerdame"}
                  />
                </Container>
                <Link to="/home">
                  <Button className="mb-4 w-50 gradient-custom-2">
                    SIGN IN
                  </Button>
                </Link>
              </FormGroup>
            </Container>

            <Container className="d-flex flex-row align-items-center justify-content-center pb-3 mb-4">
              <Container className="mb-0 p">
                Don't have an account?
                <Button className="mx-2" color="danger">
                  Danger
                </Button>
              </Container>
            </Container>
            <Container>
              <Button
                className="mb-4 w-100 "
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <FaFacebookF /> Continue with facebook
              </Button>

              <Button
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#007EADs" }}
              >
                <BsTwitter /> Continue with twitter
              </Button>
            </Container>
          </Col>
          <Col col="6" className="mb-5 other">
            <div className="d-flex flex-column  justify-content-center h-100 mb-4">
              <div className="text-white p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
