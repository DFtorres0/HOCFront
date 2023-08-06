
import React, { useState } from "react";
import "../assets/styles/CreateClass.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCodeSlash, BsDisplay, BsJustify } from "react-icons/bs";
import { Container} from "react-bootstrap";
import { MdOutlineClass } from "react-icons/md";
import { ReactDOM } from "react";
import { Module } from "../core/models/Module";
import { CoursesService } from "../core/services/Courses.service";
import { Courses } from "../core/models/Courses";
import { IntensityLevel } from "../core/models/IntensityLevels";
import { json } from "stream/consumers";
import { Activity } from "../core/models/Activity";
import { Lesson } from "../core/models/Lessons";


interface CreateClassProps {
  
}

const CreateActivity: React.FC<CreateClassProps> = (props) => {
    const [ActivityTitle, setActivityTitle] = useState('');
    const [ActivityContent, setActivityContent] = useState('');
    const [ActivityIntensity, setActivityIntensity] = useState('');
    const [ActivityTopic, setActivityTopic] = useState('');
  
    
    const handleActivityTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityTitle(event.target.value);
    };
    const handleActivityContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityContent(event.target.value);
    };
    const handleActivityIntensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityIntensity(event.target.value);
    };
    const handleActivityTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityTopic(event.target.value);
    };
  
  
  return (
    <>
        <Container className={"h4"}>Actividad</Container>
        <FloatingLabel controlId="floatingInput" label="Titulo de la actividad" className="mb-3">
            <Form.Control type="text" placeholder="Titulo de la actividad" value={ActivityTitle} required onChange={handleActivityTitleChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Contenido de la actividad" className="mb-3">
            <Form.Control type="text" placeholder="Contenido de la actividad" value={ActivityContent} required onChange={handleActivityContentChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Intensidad de la actividad" className="mb-3">
            <Form.Control type="text" placeholder="Intensidad de la actividad" value={ActivityIntensity} required onChange={handleActivityIntensityChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Tema de la actividad" className="mb-3">
            <Form.Control type="text" placeholder="Tema de la actividad" value={ActivityTopic} required onChange={handleActivityTopicChange}/>
        </FloatingLabel>

  </>

  );
};


export default CreateActivity