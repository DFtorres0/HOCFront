import { Container } from "react-bootstrap";

const MainCResource = ({videoHTML}: { videoHTML: string}) => {
  //const videoHTML = '<iframe width="72%" height="530" src="https://www.youtube.com/embed/5jKZ9KGtee0" title="One Happy Cat" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>'

  return (
    <div style={{ marginTop: '70px'}}>
      <div dangerouslySetInnerHTML={{__html: videoHTML}} />
    </div>
  );
};

export default MainCResource;
