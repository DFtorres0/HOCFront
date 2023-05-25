import { useState } from "react";
import NavegationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";

function Classes() {
  const [actualResource, setResource] = useState();

  const handleResource = (resourceLink: Lessons) => {
    setResource(resourceLink)
  }

  return (
    <div data-testid="classes" >
      <NavegationMax />
      <SideNav hijoapadre={handleResource}/>
      <MainContent actualResource={actualResource} />
    </div>
  );
}

export default Classes;
