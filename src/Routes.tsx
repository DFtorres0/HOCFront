import { Navigate, Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import { Spinner, Stack } from "react-bootstrap";
import GuardRole from "./GuardRole";
import { useValidateContext } from "./useValidation";

type RoutesType = {
  id: string;
  path?: string;
  guard?: React.FC;
  component?: any;
  routes?: RoutesType[];
};

const routesConfig: RoutesType[] = [
  {
    id: "root",
    path: "/",
    component: () => <Navigate to="/login" />,
  },
  {
    id: "login",
    path: "/login",
    component: lazy(() => import("src/pages/login/Login")),
  },
  {
    id: "home",
    path: "/home",
    guard: GuardRole(["Administrador", "Instructor", "Estudiante"]),
    component: lazy(() => import("src/pages/home/Home")),
  },
  {
    id: "indexmax",
    path: "/indexmax",
    guard: GuardRole(["Administrador", "Instructor", "Estudiante"]),
    component: lazy(() => import("src/pages/max/indexmax/IndexMax")),
  },
  {
    id: "testimonials",
    path: "/testimonials",
    guard: GuardRole(["Administrador", "Instructor", "Estudiante"]),
    component: lazy(() => import("src/pages/max/testimonials/Testimonials")),
  },
  {
    id: "tutorials",
    path: "/tutorials",
    guard: GuardRole(["Administrador", "Instructor", "Estudiante"]),
    component: lazy(() => import("src/pages/max/tutorials/Tutorials")),
  },
  {
    id: "classes",
    path: "/classes/*",
    guard: GuardRole(["Administrador", "Instructor", "Estudiante"]),
    routes: [
      {
        id: "course",
        path: "/:id",
        component: lazy(() => import("src/pages/classes/Classes")),
      },
    ],
  },
  {
    id: "register",
    path: "/register",
    component: lazy(() => import("src/pages/login/CreateUser")),
  },
  {
    id: "CreateClass",
    path: "/CreateClass",
    guard: GuardRole(["Administrador", "Instructor"]),
    component: lazy(() => import("src/pages/createclass/CreateClass")),
  },
];

const LoadingScreen = () => {
  return (
    <Stack
      direction="horizontal"
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: "0 1rem 0.5rem 0",
      }}
    >
      <Spinner animation="border" variant="primary" />
    </Stack>
  );
};

const renderRoutes = (routes: RoutesType[]) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route) => {
          const Guard = route.guard || Fragment;
          const Component = route.component;
          return (
            <Route
              key={route.id}
              path={route.path ?? ""}
              element={
                <Guard>
                  {route.routes ? renderRoutes(route.routes) : <Component />}
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : null;

const RenderedRoutes = () => {
  // Custom hook with useEffect to validate session
  useValidateContext();
  return renderRoutes(routesConfig);
};

export default RenderedRoutes;
