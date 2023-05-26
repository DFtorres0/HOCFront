import { Container } from "react-bootstrap";
import { MainCourseMock } from "../../../core/models/MainCourseMock";
import Videos from "../Resource";

const MainCResource = ({ videoHTML }: { videoHTML: string | undefined }) => {
  let videoResource: string;
  videoResource = ""
  if (videoHTML != undefined) {
    videoResource = videoHTML;
  }
  return (
    <div style={{ marginTop: "90px", marginBottom: "80px" }}>
      if(videoResource != ""){
        (<div dangerouslySetInnerHTML={{ __html: videoResource }} />)
      }
    </div>
  );
};

export default MainCResource;
