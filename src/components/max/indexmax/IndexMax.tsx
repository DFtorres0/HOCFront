import FooterMax from "../templates/FooterMax";
import HeaderMax from "../templates/HeaderMax";
import NavegationMax from "../templates/NavigationMax";
import AboutMax from "../templates/AboutMax";
import ClassMax from "./ClassMax";

function IndexMax() {

  return (
    <div data-testid="indexMax" >
      <NavegationMax/>
      <HeaderMax text={"Aprende el futuro hoy todo sobre lenguajes de programacion, informatica, tecnologia y mas"}/>
      <ClassMax/>
      <AboutMax/>
      <FooterMax/>
    </div>
  );
}

export default IndexMax;
