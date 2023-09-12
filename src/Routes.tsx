import { Navigate, Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import GuardRole from "./GuardRole";
import { useValidateContext } from "./useValidation";
import { LoadingScreen } from "src/pages/max/Loader";

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
