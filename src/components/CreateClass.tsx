
import React, { useState } from "react";
import "../assets/styles/CreateClass.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCodeSlash, BsDisplay, BsJustify } from "react-icons/bs";
import { Container} from "react-bootstrap";
import { MdOutlineClass } from "react-icons/md";


interface CreateClassProps {
  
}

const CreateClass: React.FC<CreateClassProps> = (props) => {
  const [CourseName, setCourseName] = useState('');
  const [Duration, setDuration] = useState('');
  const [Password, setPassword] = useState('');
  const [Description, setDescription] = useState('');

  const handleCourseNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseName(event.target.value);
  };
  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

  };

  
  return (
    <>
  
      <div className="Container-form">
        <Container className={"h2"}>Crea la clase</Container>
        <Container className={"h4 mb-3"}><MdOutlineClass /></Container>
        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Nombre del curso" className="mb-3">
          <Form.Control type="text" placeholder="Nombre nombre del curso" value={CourseName} required onChange={handleCourseNameChange}/>
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Duración del curso" className="mb-3">
            <Form.Control type="text" placeholder="Duración del curso" value={Duration} required onChange={handleDurationChange}/>
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingPassword" label="Intensidad" className="mb-3">
            <Form.Control type="text" placeholder="Intensidad" value={Password} required onChange={handlePasswordChange}/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Descripción" className="mb-3" style={{width:"100%",height:"30vh"}}>
            <Form.Control type="text"  as="textarea" className="TextArea" placeholder="Descripción" style={{width:"100%",height:"30vh"}} value={Description}  required onChange={handleDescriptionChange}/>
          </FloatingLabel>

          <Button type="submit" variant="outline-info" className="SubmitBtn">Crear</Button>{' '}
        </form>
      </div>
    
  </>

  );
};

export default CreateClass;