
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
import CreateLesson from "./CreateLesson";
import CreateActivity from "./CreateActivities";


interface CreateClassProps {
  
}

const CreateModule: React.FC<CreateClassProps> = (props) => {
  const [CourseName, setCourseName] = useState('');
  const [Duration, setDuration] = useState<number>();
  const [Description, setDescription] = useState('');

  
  const handleCourseNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseName(event.target.value);
  };
  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(+event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  

  const emptyModule: Module = {
    Courses: {
      CourseName: "",
      CourseDescription: "",
      CourseDuration: 0,
      IntensityLevel: {
        LevelName: "",
        LevelDescription: ""
      }
    }
  }

  const emptyActivities: Activity ={
      ActivitiesId: 0n,
      ActivityTitle: "",
      ActivityContent: "",
      IntensityLevel: undefined,
      Module: undefined,
      Topic: undefined
  }

  const emptyLesson: Lesson = {
      LessonTitle: "",
      LessonDescription: "",
      LessonContent: "",
      IntensityLevelId: undefined,
      ModuleId: undefined,
      TopicId: undefined
  }

  const [activity, setActivity] = useState<Activity[]>([]);
  const [lesson, setLesson] = useState<Lesson[]>([]);

  const addActivity = () => {
    setActivity([...activity, emptyActivities]);
  };
  const addLesson = () => {
    setLesson([...lesson, emptyLesson]);
  };

  const removeActivity = (activityIndex: number) => {
    const newActivities = activity.filter((_, index) => index !== activityIndex);
    setActivity(newActivities);
  }
  const removeLesson = (lessonIndex: number) => {
    const newLesson = lesson.filter((_, index) => index !== lessonIndex);
    setLesson(newLesson);
  }
  
  
  return (
    <>
          <div>
            {lesson?.map((lesson, lessonIndex) => (
              <div key={lessonIndex}>
                <CreateLesson/>
                <Button variant="outline-danger" className="DeleteModule mb-3" onClick={() => removeLesson(lessonIndex)}>Eliminar lección</Button>{''}
              </div>
              
            ))}
          </div>
          <div>
            {activity?.map((activity, activityIndex) => (
              <div key={activityIndex}>
                <CreateActivity/>
                <Button variant="outline-danger" className="DeleteModule mb-3" onClick={() => removeActivity(activityIndex)}>Eliminar actividad</Button>{''}
              </div>
              
            ))}
          </div>
          <div className="Container-btn">
          <Button variant="outline-info" className="addModule" onClick={addLesson}>Añadir lección</Button>{''}
          <Button variant="outline-info" className="addModule" onClick={addActivity}>Añadir actividad</Button>{''}
          </div>
  </>

  );
};


export default CreateModule