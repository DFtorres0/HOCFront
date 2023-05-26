import { Lesson } from "../../../core/models/Lessons";
import MainCFooter from "./MainCFooter";
import MainCResource from "./MainCResource";
import MainCSections from "./mainCSections/MainCSections";

const MainContent = ({ lesson }: { lesson: Lesson | undefined }) => {
  return (
    <>
      <MainCResource videoHTML={lesson? lesson.LessonContent:undefined} />
      <MainCSections />
      <MainCFooter />
    </>
  );
};

export default MainContent;
