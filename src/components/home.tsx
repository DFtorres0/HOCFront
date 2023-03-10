import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button, ListGroup } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";

function Home() {
  const [count, setCount] = useState(0);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
      <Navbar fixed="top" id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span> <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <a className="navbar-brand page-scroll" style={{cursor: "pointer"}} onClick={backToTop}>
                <BsCodeSlash /> Home of code
              </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ListGroup style={{textAlign: "right"}} className="nav navbar-nav navbar-right">
              <li>
                <a onClick={backToTop} className="page-scroll">
                  🏠 {"{Home}"}
                </a>
              </li>
              <li>
                <a className="page-scroll">👽SobreNosotros</a>
              </li>
              <li>
                <a className="page-scroll">📋Portafolio™</a>
              </li>
              <li>
                <a className="page-scroll">🛍Compras</a>
              </li>
              <li>
                <a className="page-scroll">📲Contactanos</a>
              </li>
            </ListGroup>
          </div>
        </div>
      </Navbar>

      <header id="header">
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>Home of code</h1>
                <p>
                  Diseño Web • Aplicaciones • Soluciones TI • Product Design
                </p>
                <Link to="" className="btn btn-custom btn-lg page-scroll">
                  Saber mas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
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
        <a>Home</a>
        <br />
        <Link to="/">Login</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  );
}

export default Home;
