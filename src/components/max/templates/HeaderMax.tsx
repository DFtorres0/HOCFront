import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import "../../../assets/styles/indexmax/indexmaxS.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

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
