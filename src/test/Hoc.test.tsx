import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Classes from "../components/classes/Classes";
import IndexMax from "../components/max/indexmax/IndexMax";
import Testimonials from "../components/max/testimonials/Testimonials";
import Tutorials from "../components/max/tutorials/Tutorials";
import userEvent from "@testing-library/user-event"

/**
 * @jest-environment jsdom
 */

jest.mock('react-router-dom', () => {
  const nav = jest.fn();
  return {
    ...jest.requireActual('react-router-dom'),
    mockedNavigation: nav,
    useLocation: jest.fn(() => {{pathname: '/home'}}),
    useNavigate: jest.fn(() => nav)
  }
})

const Router = require('react-router-dom');

describe("Rendering", () => {
  it("should charge correctly", () => {
    render(
      <MemoryRouter>
        <Login />
        <Home />
        <IndexMax />
        <Testimonials />
        <Tutorials />
        <Classes />
      </MemoryRouter>
    );
  });

  it("should render login", () => {
    <MemoryRouter>
      <Login />
    </MemoryRouter>;
  });
});

describe("Home", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should redirect to indexMax page", async () => {
    render(
      <Router.MemoryRouter initialEntries={['/home']}>
        <Router.Routes>
          <Router.Route path="home" element={<Home />}/>
        </Router.Routes>
      </Router.MemoryRouter>
    );

    await userEvent.click(await screen.findByText('Saber mas'))

    expect(Router.mockedNavigation).toHaveBeenCalledWith(
      '/indexmax', {
        state: { previus: '/home' }
    })
  });
});
