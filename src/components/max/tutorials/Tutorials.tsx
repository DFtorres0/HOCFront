import "../../../App.css";
import NavigationMax from "../templates/NavigationMax";
import HeaderMax from "../templates/HeaderMax";
import FooterMax from "../templates/FooterMax";
import AboutMax from "../templates/AboutMax";
import TutorialsBody from "./TutorialsBody";


function Tutorials() {

  return (
    <div id="Max" >
      <NavigationMax/>
      <HeaderMax text={"Tus Tutorias, Clases y Practicas📚en un solo lugar:"}/>
      <AboutMax/>
      <TutorialsBody/>
      <FooterMax/>
    </div>
  );
}

export default Tutorials;
