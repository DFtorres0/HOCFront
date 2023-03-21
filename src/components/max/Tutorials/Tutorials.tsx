import "../../../App.css";
import NavigationMax from "../templates/NavegationMax";
import HeaderMax from "../templates/HeaderMax";
import FooterMax from "../templates/FooterMax";
import AboutMax from "../templates/AboutMax";

function Tutorials() {

  return (
    <div id="Max" >
      <NavigationMax/>
      <HeaderMax text={"Tus Tutorias, Clases y Practicas📚en un solo lugar:"}/>
      <AboutMax/>
      <FooterMax/>
    </div>
  );
}

export default Tutorials;
