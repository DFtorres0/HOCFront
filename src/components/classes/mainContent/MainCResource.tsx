import Youtube from "react-youtube"

const MainCResource = ({ videoHTML }: { videoHTML: string | undefined }) => {

  let videoResource: string;
  videoResource = ""
  if (videoHTML != undefined) {
    videoResource = videoHTML;
  }
  return (
    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
      if(videoResource != ""){
        (<Youtube opts={{height:"450", width:"100%"}} videoId={videoHTML} />)
      }
    </div>
  );
};

export default MainCResource;
