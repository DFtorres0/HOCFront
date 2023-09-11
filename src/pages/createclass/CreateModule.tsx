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
import CreateLesson from "./CreateLesson";
import CreateActivity from "./CreateActivities";

interface CreateClassProps {
  onLessonTitleChange: (title: string) => void;
  onLessonDescriptionChange: (description: string) => void;
  onLessonDurationChange: (duartion: number) => void;
  onLessonContentChange: (content: string) => void;
  onLessonIntensityIdChange: (intensityId: number) => void;
  onLessonTopicChange: (topic: number) => void;
  onActivityTitleChange: (title: string) => void;
  onActivityContentChange: (Acontent: string) => void;
  onActivityIntensityIdChange: (AintensityId: number) => void;
  onActivityTopicChange: (Atopic: string) => void;
}

const CreateModule: React.FC<CreateClassProps> = ({
  onLessonTitleChange,
  onLessonDescriptionChange,
  onLessonContentChange,
  onLessonDurationChange,
  onLessonIntensityIdChange,
  onLessonTopicChange,
  onActivityTitleChange,
  onActivityContentChange,
  onActivityIntensityIdChange,
  onActivityTopicChange,
}) => {
  const [lessonTitle, setLessonTitle] = useState("");
  const [LessonDescription, setLessonDescription] = useState("");
  const [LessonDuration, setLessonDuration] = useState<number>();
  const [LessonContent, setLessonContent] = useState("");
  const [LessonIntensityId, setLessonIntensityId] = useState<number>();
  const [LessonTopic, setLessonTopic] = useState<number>();
  const [ActivityTitle, setActivityTitle] = useState("");
  const [ActivityContent, setActivityContent] = useState("");
  const [ActivityIntensityId, setActivityIntensityId] = useState<number>();
  const [ActivityTopic, setActivityTopic] = useState("");

  const handleLessonTitleChange = (title: string) => {
    setLessonTitle(title);
    onLessonTitleChange(title);
  };
  const handleLessonDescriptionChange = (description: string) => {
    setLessonDescription(description);
    onLessonDescriptionChange(description);
  };
  const handleLessonDurationChange = (duration: number) => {
    setLessonDuration(duration);
    onLessonDurationChange(duration);
  };
  const handleLessonContentChange = (content: string) => {
    setLessonContent(content);
    onLessonContentChange(content);
  };
  const handleLessonIntensityIdChange = (intensityId: number) => {
    setLessonIntensityId(+intensityId);
    onLessonIntensityIdChange(+intensityId);
  };
  const handleLessonTopicChange = (topic: number) => {
    setLessonTopic(topic);
    onLessonTopicChange(topic);
  };
  const handleActivityTitleChange = (Atitle: string) => {
    setActivityTitle(Atitle);
    onActivityTitleChange(Atitle);
  };
  const handleActivityContentChange = (Acontent: string) => {
    setActivityContent(Acontent);
    onActivityContentChange(Acontent);
  };
  const handleActivityIntensityIdChange = (AintensityId: number) => {
    setActivityIntensityId(+AintensityId);
    onActivityIntensityIdChange(+AintensityId);
  };
  const handleActivityTopicChange = (Atopic: string) => {
    setActivityTopic(Atopic);
    onActivityTopicChange(Atopic);
  };

  const emptyModule: Module = {
    activities: [],
    lessons: [],
  };

  const emptyActivities: Activity = {
    activityTitle: "",
    activityContent: "",
    intensityLevel: undefined,
    module: undefined,
    topic: undefined,
    topicNavigation: undefined
  };

  const emptyLesson: Lesson = {
    lessonTitle: "",
    lessonDescription: "",
    lessonContent: "",
    intensityLevel: undefined,
    moduleId: undefined,
    topic: undefined
  };

  const [activity, setActivity] = useState<Activity[]>([]);
  const [lesson, setLesson] = useState<Lesson[]>([]);

  const addActivity = () => {
    setActivity([...activity, emptyActivities]);
  };
  const addLesson = () => {
    setLesson([...lesson, emptyLesson]);
  };

  const removeActivity = (activityIndex: number) => {
    const newActivities = activity.filter(
      (_, index) => index !== activityIndex
    );
    setActivity(newActivities);
  };
  const removeLesson = (lessonIndex: number) => {
    const newLesson = lesson.filter((_, index) => index !== lessonIndex);
    setLesson(newLesson);
  };

  return (
    <>
      <div>
        {lesson?.map((lesson, lessonIndex) => (
          <div key={lessonIndex}>
            <CreateLesson
              onLessonTitleChange={handleLessonTitleChange}
              onLessonDescriptionChange={handleLessonDescriptionChange}
              onLessonDurationChange={handleLessonDurationChange}
              onLessonContentChange={handleLessonContentChange}
              onLessonIntensityIdChange={handleLessonIntensityIdChange}
              onLessonTopicChange={handleLessonTopicChange}
            />
            <Button
              variant="outline-danger"
              className="DeleteModule mb-3"
              onClick={() => removeLesson(lessonIndex)}
            >
              Eliminar lección
            </Button>
            {""}
          </div>
        ))}
      </div>
      <div>
        {activity?.map((activity, activityIndex) => (
          <div key={activityIndex}>
            <CreateActivity
              onActivityTitleChange={handleActivityTitleChange}
              onActivityContentChange={handleActivityContentChange}
              onActivityIntensityIdChange={handleActivityIntensityIdChange}
              onActivityTopicChange={handleActivityTopicChange}
            />
            <Button
              variant="outline-danger"
              className="DeleteModule mb-3"
              onClick={() => removeActivity(activityIndex)}
            >
              Eliminar actividad
            </Button>
            {""}
          </div>
        ))}
      </div>
      <div className="Container-btn">
        <Button
          variant="outline-info"
          className="addModule"
          onClick={addLesson}
        >
          Añadir lección
        </Button>
        {""}
        <Button
          variant="outline-info"
          className="addModule"
          onClick={addActivity}
        >
          Añadir actividad
        </Button>
        {""}
      </div>
    </>
  );
};

export default CreateModule;
