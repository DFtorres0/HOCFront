// CreateUser.tsx
import React, { useState } from "react";
import "../assets/styles/CreateUser.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCodeSlash, BsJustify, BsTelephone } from "react-icons/bs";
import { Container} from "react-bootstrap";

interface CreateUserProps {
  // Define las propiedades requeridas aquí.
}

const CreateUser: React.FC<CreateUserProps> = (props) => {
  const [Name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setUserName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPhone(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const CreateUser: User = {
      userName: Name,
      userUsername: userName,
      userEmail: email,
      userRoleId: 1,
      userPassword: password,
      userPhone: Phone,

    };
    CreateUser.userName = Name;
    CreateUser.userEmail = email;
    CreateUser.userUsername = userName;
    CreateUser.userPassword = password;
    CreateUser.userPhone = Phone;

  };

  
  return (
    <>
  
      <div className="Container-form">
        <Container className={"h2"}>Crea tu cuenta</Container>
        <Container className={"h4 mb-3"}><BsCodeSlash /></Container>
        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
          <Form.Control type="text" placeholder="Nombre" value={Name} required onChange={handleNameChange}/>
          </FloatingLabel>
        
          <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
            <Form.Control type="text" placeholder="Usuario" value={userName}  required onChange={handleUsernameChange}/>
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Correo" className="mb-3">
            <Form.Control type="email" placeholder="Correo" value={email} required onChange={handleEmailChange}/>
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
            <Form.Control type="password" placeholder="Contraseña" value={password} required onChange={handlePasswordChange}/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Telefono" className="mb-3">
            <Form.Control type="text" placeholder="Telefono" value={Phone} required onChange={handlePhoneChange}/>
          </FloatingLabel>

          <Button type="submit" variant="outline-info" className="SubmitBtn">Crear</Button>{' '}
        </form>
      </div>
    
  </>

  );
};

export default CreateUser;
