import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { Link, MemoryRouter } from "react-router-dom";
import { App } from "../App";
import Home from "../components/home/Home";
import Classes from "../components/classes/Classes";

/**
 * @jest-environment jsdom
 */

describe("Login", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
  });
  
  it("should link correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  
  it("should show content correctly", () => {
    render(
      <MemoryRouter>
        <Classes />
      </MemoryRouter>
    );
  });
});
