import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type MainCSNavProps = {
  currentComponent: (data: string) => void;
};

const MainCSNavbar: React.FC<MainCSNavProps> = ({ currentComponent }) => {
  const [clickComponent, setClickComponent] = useState("close");

  const handleOnChange = (data: string) => {
    currentComponent(data);
  };

  return (
    <div>
      <Navbar style={{ fontSize: "30px", marginBottom: "20px" }}>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Nav>
            <Nav.Link
              onClick={() => handleOnChange("Compilador")}
              style={{
                color: "aliceblue",
                paddingLeft: "50px",
                paddingRight: "50px",
                borderLeft: "2px solid #4a4a4a",
              }}
            >
              Compilador
            </Nav.Link>
            <Nav.Link
              onClick={() => handleOnChange("Descripcion")}
              style={{
                color: "aliceblue",
                paddingLeft: "50px",
                paddingRight: "50px",
                borderLeft: "1px solid #4a4a4a",
              }}
            >
              Descripcion
            </Nav.Link>
            <Nav.Link
              onClick={() => handleOnChange("Recursos")}
              style={{
                color: "aliceblue",
                paddingLeft: "50px",
                paddingRight: "50px",
                borderLeft: "1px solid #4a4a4a",
                borderRight: "2px solid #4a4a4a",
              }}
            >
              Recursos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainCSNavbar;
