// CreateUser.tsx
import React, { useState } from "react";
import "../../assets/styles/CreateUser.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsCodeSlash, BsJustify, BsTelephone } from "react-icons/bs";
import { Container, Spinner } from "react-bootstrap";
import useRegister from "./hooks/useRegister";

interface CreateUserProps {
  // Define las propiedades requeridas aquí.
}

const CreateUser: React.FC<CreateUserProps> = (props) => {
  const [userName, setName] = useState("");
  const [userUsername, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhone, setPhone] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const {
    mutate: registerUser,
    error: registerError,
    isSuccess: registerSuccess,
    isLoading: registerLoading,
  } = useRegister();

  if (registerLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="Container-form">
        <Container className={"h2"}>Crea tu cuenta</Container>
        <Container className={"h4 mb-3"}>
          <BsCodeSlash />
        </Container>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={userName}
              required
              onChange={handleNameChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Usuario"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Usuario"
              value={userUsername}
              required
              onChange={handleUsernameChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Correo"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Correo"
              value={userEmail}
              required
              onChange={handleEmailChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Contraseña"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={userPassword}
              required
              onChange={handlePasswordChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Telefono"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Telefono"
              value={userPhone}
              required
              onChange={handlePhoneChange}
            />
          </FloatingLabel>
          <Button
            onClick={() =>
              registerUser({
                userName,
                userUsername,
                userPassword,
                userEmail,
                userPhone,
                userRoleId: 3,
              })
            }
            variant="outline-info"
            className="SubmitBtn"
          >
            Crear
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateUser;
