import { useState } from "react";
import { Link } from "react-router-dom";
import {Container, Button } from "react-bootstrap";
import Headermax from "./headermax";
import Aboutmax from "./aboutmax";
import NavegationMax from "./NavegationMax";


function Indexmax() {

  return (
    <div>
      <NavegationMax/>
      <Headermax/>
      <Aboutmax/>
    </div>
  );
}

export default Indexmax;