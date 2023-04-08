import MainCSCompiler from "./MainCSCompiler";
import MainCSDescription from "./MainCSDescription";
import MainCSNavbar from "./MainCSNavbar";
import MainCSResources from "./MainCSResources";

const MainCSections = () => {
  return (
    <>
      <MainCSNavbar />
      <MainCSDescription />
      <MainCSCompiler />
      <MainCSResources />
    </>
  );
};

export default MainCSections;
