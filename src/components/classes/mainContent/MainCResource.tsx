import { Container } from "react-bootstrap";
import { MainCourseMock } from "../../../models/MainCourseMock";
import Videos from "../Resource";

const MainCResource = () => {
  const videoHTML = "<div>";
  

  return (
    <div style={{ marginTop: "90px" , marginBottom: "80px"}}>
      {MainCourseMock.map((result) =>
        result.Modules.map((module) =>
          module.Lessons.map((attribute) => (
            <div dangerouslySetInnerHTML={{ __html: attribute.LessonContent}} />
        
          ))
        )
      )}
      
    </div>
  );
};

export default MainCResource;
