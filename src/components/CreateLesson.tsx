
import React, { useState } from "react";
import "../assets/styles/CreateClass.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCodeSlash, BsDisplay, BsJustify } from "react-icons/bs";
import { Container} from "react-bootstrap";
import { MdOutlineClass, MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { ReactDOM } from "react";
import { json } from "stream/consumers";
import CreateClass from "../../src/components/CreateClass";



interface CreateClassProps {
  onLessonTitleChange: (title: string) => void;
  onLessonDescriptionChange: (description: string) => void;
  onLessonDurationChange: (duration: number) => void;
  onLessonContentChange: (content: string) => void;
  onLessonIntensityIdChange: (intensityId: number) => void;
  onLessonTopicChange: (topic: number) => void;
  
}

const CreateLesson: React.FC<CreateClassProps> = ({onLessonTitleChange,onLessonDescriptionChange,
onLessonDurationChange, onLessonContentChange, onLessonIntensityIdChange, onLessonTopicChange}) => {
  const [LessonTitle, setLessonTitle] = useState('');
  const [LessonDescription, setLessonDescription] = useState('');
  const [LessonDuration, setLessonDuration] = useState<number>();
  const [LessonContent, setLessonContent] = useState('');
  const [LessonIntensityId, setLessonIntensityId] = useState<number>();
  const [LessonTopic, setLessonTopic] = useState('');
  
  
  const handleLessonTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonTitle(event.target.value);
    onLessonTitleChange(event.target.value);
  };
  const handleLessonDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonDescription(event.target.value);
    onLessonDescriptionChange(event.target.value);
    
  };
  const handleLessonDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonDuration(+event.target.value);
    onLessonDurationChange(+event.target.value);
  };
  const handleLessonContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonContent(event.target.value);
    onLessonContentChange(event.target.value);
  };
  const handleLessonIntensityIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonIntensityId(+event.target.value);
    onLessonIntensityIdChange(+event.target.value);
  };
  const handleLessonTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLessonTopic(event.target.value);
    onLessonTopicChange(parseInt(event.target.value))
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
          <Form.Control type="number" placeholder="Intensidad de la lección" value={LessonIntensityId} required onChange={handleLessonIntensityIdChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Tema de la lección" className="mb-3">
          <Form.Control type="text" placeholder="Tema de la lección" value={LessonTopic} required onChange={handleLessonTopicChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Descripción de la lección" className="mb-3" style={{width:"100%",height:"30vh"}}>
          <Form.Control type="text" as="textarea" className="TextArea" placeholder="Descripción de la lección" value={LessonDescription} required onChange={handleLessonDescriptionChange} style={{width:"100%",height:"30vh"}}/>
        </FloatingLabel>
        

  </>
  

  );
};


export default CreateLesson
