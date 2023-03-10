import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import {
  Navbar,
  Container,  
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "react-bootstrap";

function Indexmax() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <a>Index max</a>
        <br />
        <Link to="/">Login</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Indexmax;
