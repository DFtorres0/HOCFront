import "../../assets/styles/home/HomeHdStyle.css";
import { Link } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import getMockUsers from "./hooks/useGetExample";
import getMockUsersList from "./hooks/useListExample";

const HomeHeader = () => {
  return (
    <div id="header">
      <div className="intro">
        <Container className="intro-text">
          <h1>Home of code</h1>
          <p>Diseño Web • Aplicaciones • Soluciones TI • Product Design</p>
          <Link to="/indexmax" className="btn btn-custom btn-lg page-scroll">
            Saber mas
          </Link>
          <Stack gap={3}>
            <p>Api example with axios</p>
            <Button
              onClick={getMockUsers}
              variant="outline-light"
              className="btn-lg page-scroll"
            >
              Get One
            </Button>
            <Button
              onClick={getMockUsersList}
              variant="outline-info"
              className="btn-lg page-scroll"
            >
              Get List
            </Button>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
