import NavegationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";

function Classes() {
  return (
    <div data-testid="classes" >
      <NavegationMax />
      <SideNav />
      <MainContent/>
    </div>
  );
}

export default Classes;
