import "../../assets/styles/classes/ClassesHdStyle.css";
import NavegationMax from "../max/templates/NavigationMax";
import SideNav from "./ClassSideNav";
import MainContent from "./mainContent/MainContent";

function Classes() {
  return (
    <div id="HeaderClasses">
      <div data-testid="classes">
        <NavegationMax />
        <SideNav />
        <MainContent />
      </div>
    </div>
  );
}

export default Classes;
