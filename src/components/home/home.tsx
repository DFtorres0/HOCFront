import { useState } from "react";
import "../../assets/styles/home/homeStyle.css";
import { Link } from "react-router-dom";
import Navigation from "./navigationhome";
import Header from "./headerhome";
import About from "./abouthome";
import {Container, Button } from "react-bootstrap";

function Home() {

  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
    </div>
  );
}

export default Home;
