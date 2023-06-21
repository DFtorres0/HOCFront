import { useState } from "react";
import MainCSCompiler from "./MainCSCompiler";
import MainCSDescription from "./MainCSDescription";
import MainCSNavbar from "./MainCSNavbar";
import MainCSResources from "./MainCSResources";
import { Lesson } from "../../../../core/models/Lessons";

const MainCSections = ({ lesson }: { lesson: Lesson | undefined }) => {
  const [currentComponent, setCurrentComponent] = useState("")

  const handleCurrentComponent = (event: string) => {
    setCurrentComponent(event)
  }

  return (
    <>
      <MainCSNavbar currentComponent={handleCurrentComponent} />
      <MainCSDescription isVisible={currentComponent} lesson={lesson} />
      <MainCSCompiler isVisible={currentComponent} />
      <MainCSResources isVisible={currentComponent} lesson={lesson} />
    </>
  );
};

export default MainCSections;
