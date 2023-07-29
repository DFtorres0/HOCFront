import { useState, useEffect} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type MainCSNavProps = {
  currentComponent: (data: string) => void;
};

const MainCSNavbar: React.FC<MainCSNavProps> = ({ currentComponent }) => {
  const [clickComponent, setClickComponent] = useState("close");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleOnChange = (data: string) => {
    currentComponent(data);
  };

  return (
    <div>
      <Navbar style={{ fontSize:!isMobile?"30px":"15px", marginBottom: "20px" }}>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Nav>
            <Nav.Link
              onClick={() => handleOnChange("Compilador")}
              style={{
                color: "aliceblue",
                paddingLeft:!isMobile? "50px":"10px",
                paddingRight:!isMobile? "50px":"10px",
              }}
            >
              Compilador
            </Nav.Link >
            <Nav.Link
              onClick={() => handleOnChange("Descripcion")}
              style={{
                color: "aliceblue",
                paddingLeft:!isMobile? "50px":"10px",
                paddingRight:!isMobile? "50px":"10px",
                borderLeft: "1px solid #4a4a4a",
                
              }}
            >
              Descripcion
            </Nav.Link>
            <Nav.Link
              onClick={() => handleOnChange("Recursos")}
              style={{
                color: "aliceblue",
                paddingLeft:!isMobile? "50px":"10px",
                paddingRight:!isMobile? "50px":"10px",
                borderLeft: "1px solid #4a4a4a",
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
