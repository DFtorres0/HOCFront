import "../../../assets/styles/indexmax/HeaderMaxS.css";
import { Navbar } from "react-bootstrap";


const HeaderMax = ({ text }: { text: String }) => {
  return (
    <div id="headermax">
      <Navbar className="Header-Navbar-1" fixed="top">
        <div className="image"></div>
        <div className="my-text-T">
          <h1>{text}</h1>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderMax;
