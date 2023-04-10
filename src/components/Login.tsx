import { Button, Form, FormGroup } from "react-bootstrap";
import "../assets/styles/loginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Login(): JSX.Element {
  return (
    <Container className="my-5 gradient-form">
      <Row>
        <Col col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Login</h4>
            </div>
            <p>Please login to your account</p>
                <form className="needs-validation">
              <div className="form-group was-validated mb-4">
                  <label htmlFor="Email" className="form-label">
                  Email Address
                <input type="Email" className="form-control" required></input></label>
                </div>
              
              <div className="form-group was-validated mb-4">
                <label htmlFor="password" className="form-label">
                Password
                 <input
                  type="password"
                  className="form-control"
                  required></input></label>
              </div>
              <div className="form-group form-check mb-2">
              <label htmlFor="check" className="form-check-label">
              Remember me
              <input type="checkbox" className="form-check-input"></input>                  
                </label>
              </div>
              <Link to="/home">
                <Button className="mb-4 w-100 gradient-custom-2">
                  SIGN IN
                </Button>
              </Link>
            </form>
            </div>
         
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <Button className="mx-2" color="danger">
              Danger
            </Button>
          </div>
          <div>
            <Button
              className="mb-4 w-100 "
              size="lg"
              style={{ backgroundColor: "#3b5998" }}>
              <FaFacebookF /> Continue with facebook
            </Button>

            <Button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#007EADs" }}>
              <BsTwitter />  Continue with twitter
            </Button>
          </div>
        </Col>
        <Col col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
