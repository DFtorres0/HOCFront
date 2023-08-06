
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

const CreateLesson: React.FC<CreateClassProps> = (props) => {
  const [LessonTitle, setLessonTitle] = useState('');
  const [LessonDescription, setLessonDescription] = useState('');
  const [LessonDuration, setLessonDuration] = useState<number>();
  const [LessonContent, setLessonContent] = useState('');
  const [LessonIntensity, setLessonIntensity] = useState('');
  const [LessonTopic, setLessonTopic] = useState('');

  
  const handleLessonTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonTitle(event.target.value);
  };
  const handleLessonDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonDescription(event.target.value);
  };
  const handleLessonDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonDuration(+event.target.value);
  };
  const handleLessonContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonContent(event.target.value);
  };
  const handleLessonIntensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonIntensity(event.target.value);
  };
  const handleLessonTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonTopic(event.target.value);
  };


 
  
  
  return (
    <> 
        <Container className={"h4"}>Lección</Container>
        <FloatingLabel controlId="floatingInput" label="Titulo de la lección" className="mb-3">
          <Form.Control type="text" placeholder="Titulo de la lección" value={LessonTitle} required onChange={handleLessonTitleChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Duración de la lección" className="mb-3">
          <Form.Control type="number" placeholder="Duración de la lección" value={LessonDuration} required onChange={handleLessonDurationChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Contenido de la lección" className="mb-3">
          <Form.Control type="text" placeholder="Contenido de la lección" value={LessonContent} required onChange={handleLessonContentChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Intensidad de la lección" className="mb-3">
          <Form.Control type="text" placeholder="Intensidad de la lección" value={LessonIntensity} required onChange={handleLessonIntensityChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Tema de la lección" className="mb-3">
          <Form.Control type="text" placeholder="Tema de la lección" value={LessonTopic} required onChange={handleLessonTopicChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Descripción de la lección" className="mb-3" style={{width:"100%",height:"30vh"}}>
          <Form.Control type="text" placeholder="Descripción de la lección" value={LessonDescription} required onChange={handleLessonDescriptionChange} style={{width:"100%",height:"30vh"}}/>
        </FloatingLabel>

  </>

  );
};


export default CreateLesson