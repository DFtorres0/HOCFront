
import React, { useState } from "react";
import "../assets/styles/CreateClass.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCodeSlash, BsDisplay, BsJustify } from "react-icons/bs";
import { Container} from "react-bootstrap";
import { MdOutlineClass } from "react-icons/md";
import { ReactDOM } from "react";
import { json } from "stream/consumers";

interface CreateClassProps {
  onActivityTitleChange: (Atitle: string) => void;
  onActivityContentChange: (Acontent: string) => void;
  onActivityIntensityIdChange: (AintensityId: number) => void;
  onActivityTopicChange: (Atopic: string) => void;
  
}

const CreateActivity: React.FC<CreateClassProps> = ({onActivityTitleChange, onActivityContentChange, onActivityIntensityIdChange, onActivityTopicChange}) => {
    const [ActivityTitle, setActivityTitle] = useState('');
    const [ActivityContent, setActivityContent] = useState('');
    const [ActivityIntensityId, setActivityIntensityId] = useState<number>();
    const [ActivityTopic, setActivityTopic] = useState('');
  
    
    const handleActivityTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityTitle(event.target.value);
      onActivityTitleChange(event.target.value);
    };
    const handleActivityContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityContent(event.target.value);
      onActivityContentChange(event.target.value);
    };
    const handleActivityIntensityIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityIntensityId(+event.target.value);
      onActivityIntensityIdChange(+event.target.value);
    };
    const handleActivityTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivityTopic(event.target.value);
      onActivityTopicChange(event.target.value);
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
            <Form.Control type="text" placeholder="Intensidad de la actividad" value={ActivityIntensityId} required onChange={handleActivityIntensityIdChange}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Tema de la actividad" className="mb-3">
            <Form.Control type="text" placeholder="Tema de la actividad" value={ActivityTopic} required onChange={handleActivityTopicChange}/>
        </FloatingLabel>

  </>

  );
};


export default CreateActivity