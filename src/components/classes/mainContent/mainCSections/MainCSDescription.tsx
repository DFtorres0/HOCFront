import { Container } from "react-bootstrap";

const MainCSDescription = ({isVisible, lesson}:{isVisible: string, lesson: Lesson | undefined}) => {
  return (
    <div
      style={{
        display: isVisible == "Descripcion" ? "flex" : "none",
        color: "aliceblue",
        marginBottom: "30px",
      }}
    >
      <Container style={{textAlign:"left"}} className="h2">{lesson?.LessonDescription}</Container>
    </div>
  );
};

export default MainCSDescription;
