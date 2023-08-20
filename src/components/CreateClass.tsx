import React, { useState } from "react";
import "../assets/styles/CreateClass.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsCodeSlash, BsDisplay, BsJustify } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { MdOutlineClass } from "react-icons/md";
import { ReactDOM } from "react";
import { json } from "stream/consumers";
import CreateModule from "./CreateModule";
import CreateLesson from "./CreateLesson";
import CreateActivity from "./CreateActivities";
import { Lesson } from "../core/models/Lessons";
import axios from "axios";
import { enviroment } from "../enviroments/enviroment";

const CreateClass = () => {
  const [CourseName, setCourseName] = useState("");
  const [Duration, setDuration] = useState<number>();
  const [Description, setDescription] = useState("");
  const [IntensityId, setIntensityId] = useState<number>();
  const [LessonTitle, setLessonTitle] = useState("");
  const [LessonDescription, setLessonDescription] = useState("");
  const [LessonDuration, setLessonDuration] = useState<number>();
  const [LessonContent, setLessonContent] = useState("");
  const [LessonIntensityId, setLessonIntensityId] = useState<number>();
  const [LessonTopic, setLessonTopic] = useState("");
  const [ActivityTitle, setActivityTitle] = useState("");
  const [ActivityContent, setActivityContent] = useState("");
  const [ActivityIntensityId, setActivityIntensityId] = useState<number>();
  const [ActivityTopic, setActivityTopic] = useState("");

  const handleCourseNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCourseName(event.target.value);
  };
  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(+event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleIntensityIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntensityId(+event.target.value);
  };

  const handleLessonTitleChange = (title: string) => {
    setLessonTitle(title);
  };
  const handleLessonDescriptionChange = (description: string) => {
    setLessonDescription(description);
  };
  const handleLessonDurationChange = (duration: number) => {
    setLessonDuration(duration);
  };
  const handleLessonContentChange = (content: string) => {
    setLessonContent(content);
  };
  const handleLessonIntensityIdChange = (intensityId: number) => {
    setLessonIntensityId(intensityId);
  };
  const handleLessonTopicChange = (topic: string) => {
    setLessonTopic(topic);
  };

  const handleActivityTitleChange = (Atitle: string) => {
    setActivityTitle(Atitle);
  };
  const handleActivityContentChange = (Acontent: string) => {
    setActivityContent(Acontent);
  };
  const handleActivityIntensityIdChange = (Aintensity: number) => {
    setActivityIntensityId(Aintensity);
  };
  const handleActivityTopicChange = (Atopic: string) => {
    setActivityTopic(Atopic);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const CreateClass: Course = {
      CourseName: CourseName,
      CourseDescription: Description,
      CourseDuration: Duration,
      IntensityLevelId: IntensityId,
      Modules: [],
    };

    CreateClass.CourseName = CourseName;
    CreateClass.CourseDescription = Description;
    CreateClass.CourseDuration = Duration;
    CreateClass.IntensityLevelId = IntensityId;
  };

  const emptyModule: Module = {
    Activities: [],
    Lessons: [],
  };

  const CreateLessons: Lesson = {
    LessonTitle: LessonTitle,
    LessonDescription: LessonDescription,
    LessonDuration: LessonDuration,
    LessonContent: LessonContent,
    LessonIntensityLevelId: LessonIntensityId,
    LessonTopic: LessonTopic,
  };

  CreateLessons.LessonTitle = LessonTitle;
  CreateLessons.LessonDescription = LessonDescription;
  CreateLessons.LessonDuration = LessonDuration;
  CreateLessons.LessonContent = LessonContent;
  CreateLessons.IntensityLevelId = LessonIntensityId;
  CreateLessons.LessonTopic = LessonTopic;

  const [modules, setModules] = useState<Module[]>([]);

  const addModule = () => {
    setModules([...modules, emptyModule]);
    console.log(modules);
  };

  const removeModule = (moduleIndex: number) => {
    const newModules = modules.filter((_, index) => index !== moduleIndex);
    setModules(newModules);
  };

  return (
    <>
      <div className="Container-form">
        <Container className={"h2"}>Crea la clase</Container>
        <Container className={"h4 mb-3"}>
          <MdOutlineClass />
        </Container>
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre del curso"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nombre nombre del curso"
              value={CourseName}
              required
              onChange={handleCourseNameChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Duración del curso"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Duración del curso"
              value={Duration}
              required
              onChange={handleDurationChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Nivel de intensidad del curso"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Nivel de intensidad del curso"
              value={IntensityId}
              required
              onChange={handleIntensityIdChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Descripción"
            className="mb-3"
            style={{ width: "100%", height: "30vh" }}
          >
            <Form.Control
              type="text"
              as="textarea"
              className="TextArea"
              placeholder="Descripción"
              style={{ width: "100%", height: "30vh" }}
              value={Description}
              required
              onChange={handleDescriptionChange}
            />
          </FloatingLabel>

          <div>
            {modules?.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <CreateModule
                  onLessonTitleChange={handleLessonTitleChange}
                  onLessonDescriptionChange={handleLessonDescriptionChange}
                  onLessonDurationChange={handleLessonDurationChange}
                  onLessonContentChange={handleLessonContentChange}
                  onLessonIntensityIdChange={handleLessonIntensityIdChange}
                  onLessonTopicChange={handleLessonTopicChange}
                  onActivityTitleChange={handleActivityTitleChange}
                  onActivityContentChange={handleActivityContentChange}
                  onActivityIntensityIdChange={handleActivityIntensityIdChange}
                  onActivityTopicChange={handleActivityTopicChange}
                />
                <Button
                  variant="outline-danger"
                  className="DeleteModule mb-3"
                  onClick={() => removeModule(moduleIndex)}
                >
                  Eliminar modulo
                </Button>
                {""}
              </div>
            ))}
          </div>

          <div className="ButtonsContainer">
            <Button
              variant="outline-info"
              className="addModule"
              onClick={addModule}
            >
              Añadir modulo
            </Button>
            {""}
            <Button type="submit" variant="outline-info" className="SubmitBtn">
              Crear
            </Button>{" "}
          </div>
          <h1>{LessonTopic}</h1>
        </form>
      </div>
    </>
  );
};

export default CreateClass;
