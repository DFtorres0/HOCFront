import FooterMax from "../templates/FooterMax";
import HeaderMax from "../templates/HeaderMax";
import NavegationMax from "../templates/NavegationMax";
import AboutMax from "./Aboutmax";
import ClassMax from "./ClassMax";
import Classmax from "./ClassMax";

function IndexMax() {

  return (
    <div>
      <NavegationMax/>
      <HeaderMax text={"Aprende El Futuro Hoy 👨🏼‍💻Todo sobre lenguajes de programacion, informatica, tecnologia y mas🤓"}/>
      <ClassMax/>
      <AboutMax/>
      <FooterMax/>
    </div>
  );
}

export default IndexMax;