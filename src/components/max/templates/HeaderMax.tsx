import "../../../assets/styles/indexmax/HeadermaxS.css";
import { Navbar } from "react-bootstrap";

const HeaderMax = ({text}:{text:String}) => {
  return (
    <header>
      <Navbar className="Header-Navbar-1" fixed="top">
        <div id="image">
        </div>
          <div className="my-text-T">
            <h1 style={{ color: "#fff" }}>
              {text}
            </h1>
          </div>
      </Navbar>
    </header>
  );
};

export default HeaderMax;
