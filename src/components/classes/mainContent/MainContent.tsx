import MainCFooter from "./MainCFooter";
import MainCResource from "./MainCResource";
import MainCSections from "./mainCSections/MainCSections";

const MainContent = ({actualResource}: {actualResource:Lesson}) => {
  return (
    <>
      <MainCResource text={actualResource.mainResource}/>
      <MainCSections/>
      <MainCFooter/>
    </>
  );
};

export default MainContent;
