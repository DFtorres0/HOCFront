import {
  Button,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import "../assets/styles/loginForm.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { LoginObject, LoginObjectModel } from "../core/services/LoginObject";
import { AuthenticationService } from "../core/services/Authentication.service";
import { useEffect, useState, FC } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setredirectTo] = useState("/home");
  const [isMobile, setIsMobile] = useState(false);

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

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleAuthentication = () => {
    const auth = new AuthenticationService();

    const user: LoginObject = {
      username: username,
      password: password,
    };
    user.username = username;
    user.password = password;

    auth.login(user);

    const userToken = localStorage.getItem("token");
    console.log(userToken);
    if (userToken == "undefined" || undefined || null) {
      setredirectTo("/home");
    } else {
      setredirectTo("/home");
    }
    console.log(redirectTo);
  };

  return (
<<<<<<< HEAD
    <div  id="login" data-testid="login">
      <div className="login">
        <Row style={{minHeight:"100vh"}} className="other mb-5">
          <Col style={{display:"flex", flexDirection:"column"}} id="col1" className="mb-5">
            <Container className="d-flex flex-column ms-1">
              <Container className="text-center mt-5 h4 mb-5 pb-2">
                <b>Iniciar Sesion</b>
              </Container>
              <Container className="text-center p mb-3 pb-2">
                Por favor inicia sesion en tu cuenta
              </Container>
              <FormGroup id="validation" className="needs-validation">
                <Container className="form-group ">
                  <FloatingLabel
                    style={{ width: "60%" }}
                    className="form-label"
                    id="floatingUser"
                    controlId="floatingUser"
                    label="Usuario"
                  >
                    <FormControl
                      type="text"
                      className="form-control text-center"
                      placeholder="Usuario"
                      aria-label="Username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </FloatingLabel>
                </Container>

                <Container className="form-group mb-4 ">
                  <FloatingLabel
                    style={{ width: "60%"  }}
                    className="form-label"
                    controlId="floatingPassword "
                    label="Contraseña"
                  >
                    <FormControl
                      type="password"
                      className="form-control "
                      placeholder="Contraseña"
                      aria-label="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </FloatingLabel>
                  <InputGroup className="form-label mt-3"></InputGroup>
                </Container>
                <Container
                  style={{ display: "flex" }}
                  className="form-group form-check mb-4"
                >
                  <Form.Check
                    className="form-check mb-4"
                    type={"checkbox"}
                    id={"RememberMeCheckbox"}
                    label={"Recuerdame"}
                  />
                </Container>
                <Link to={`${redirectTo}`}>
                  <Button
                    onClick={handleAuthentication}
                    className=" justify-content-center align-items-center mb-5 w-25 gradient-custom-2"
                  >
                    SIGN IN
                  </Button>
                </Link>
              </FormGroup>
=======
    <div className="login" id="login" data-testid="login">
      <Row
        className="custom-row"
        style={{ minHeight: "100vh", maxWidth: "100vw" }}
      >
        <Col className="flex flex-column" id="col1">
          <Container className="d-flex flex-column">
            <Container className="text-center mt-5 h4 mb-5 pb-2">
              <b>Iniciar Sesion</b>
>>>>>>> b525a261d3cf9825e7ef5e1f8ff15a2bc7f43166
            </Container>
            <Container className="text-center p mb-3 pb-2">
              Por favor inicia sesion en tu cuenta
            </Container>
            <FormGroup
              className="flex flex-column justify-content-center"
              style={{
                paddingLeft: isMobile ? "5%" : "20%",
                paddingRight: isMobile ? "5%" : "20%",
              }}
            >
              <FloatingLabel
                className="form-label"
                controlId="floatingUser"
                label="Usuario"
              >
                <FormControl
                  type="password"
                  className="form-control"
                  placeholder="Usuario"
                  aria-label="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </FloatingLabel>

              <FloatingLabel
                className="form-label"
                controlId="floatingPassword"
                label="Contraseña"
              >
                <FormControl
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  aria-label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FloatingLabel>

              <Form.Check
                className="form-check mb-4"
                type={"checkbox"}
                id={"RememberMeCheckbox"}
                label={"Recuerdame"}
              />
              <Link to={`${redirectTo}`}>
                <Button
                  onClick={handleAuthentication}
                  className="mb-4 w-50 gradient-custom-2"
                >
                  SIGN IN
                </Button>
              </Link>
            </FormGroup>
          </Container>

          <Container className="d-flex flex-row align-items-center justify-content-center pb-3">
            <Container className="acc">
              Aun no tienes cuenta?
              <Button id="btndanger" className="mx-3" color="danger">
                Registrate
              </Button>
            </Container>
          </Container>
          <Stack gap={3} className="col-md-5 mx-auto">
            <Button
              id="facebook"
              size="lg"
              className="btnface"
              style={{ backgroundColor: "#3b5998" }}
            >
              <FaFacebookF /> Inicie Sesion con Facebook
            </Button>

            <Button size="lg" style={{ backgroundColor: "#007EADs" }}>
              <BsTwitter /> Inicie Sesion con Twitter
            </Button>
          </Stack>
        </Col>
        <Col
          style={{ display: isMobile ? "none" : "" }}
          col="6"
          id="col2"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="text-white">
            <h4 id="textclo2" className="mb-4">
              {" "}
              HOME OF CODE{" "}
            </h4>
            <h4 id="textclo2" className="mb-4">
              {" "}
              <BsCodeSlash />{" "}
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
