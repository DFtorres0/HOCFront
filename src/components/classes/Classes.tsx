import { useState } from "react";
import "../../assets/styles/classes/ClassesHdStyle.css";
import NavegationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";

function Classes() {

  const [currentLesson, setCurrentLesson] = useState<Lesson>();

  const handleCurrentLesson = (event: Lesson) => {
    setCurrentLesson(event);
  };

  return (
    <div id="HeaderClasses">
      <div data-testid="classes">
        <NavegationMax />
        <SideNav currentLesson={handleCurrentLesson} />
        <MainContent lesson={currentLesson} />
      </div>
    </div>
  );
}

export default Classes;
