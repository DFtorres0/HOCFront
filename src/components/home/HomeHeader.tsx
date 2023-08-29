import "../../assets/styles/home/HomeHdStyle.css";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Stack } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import useUserList from "../hooks/useListUsers";

interface ExampleUserComponentProps {
  exampleData: ExampleApiResponse;
  multiple?: boolean;
}

const ExampleUserComponent: FC<ExampleUserComponentProps> = ({
  exampleData,
  multiple = false,
}) => {
  const { userId, body } = exampleData;

  return (
    <div>
      <h3>{multiple ? "Multiple" : "Single"} user</h3>
      <p>
        <strong>ID:</strong> {exampleData.id}
      </p>
      <p>
        <strong>Title:</strong> {exampleData.title}
      </p>
      <p>
        <strong>UserID:</strong> {userId}
      </p>
      <p>
        <strong>Body:</strong> {body}
      </p>
    </div>
  );
};

const HomeHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="header" style={{height:"100vh"}}>
      <div className="intro">
        <Container className="intro-text">
          <h1>Home of code</h1>
          <p>Diseño Web • Aplicaciones • Soluciones TI • Product Design</p>
          <Link to="/indexmax" className="btn btn-custom btn-lg page-scroll">
            Saber mas
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
