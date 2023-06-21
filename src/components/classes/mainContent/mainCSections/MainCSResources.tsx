import { Container } from "react-bootstrap";
import { Lesson } from "../../../../core/models/Lessons";

const MainCSResources = ({isVisible, lesson}:{isVisible: string, lesson: Lesson | undefined}) => {
  return (
    <div
      style={{
        display: isVisible == "Recursos" ? "flex" : "none",
        color: "aliceblue",
        marginBottom: "30px",
      }}
    >
      <Container style={{textAlign:"left"}} className="h2">{lesson?.Topic.TopicDescription}</Container>
    </div>
  );
};

export default MainCSResources;
