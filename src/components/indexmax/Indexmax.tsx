import { useState } from "react";
import { Link } from "react-router-dom";
import {Container, Button } from "react-bootstrap";
import Headermax from "./headermax";
import Aboutmax from "./aboutmax";


function Indexmax() {

  return (
    <div>
      <Headermax/>
      <Aboutmax/>
    </div>
  );
}

export default Indexmax;