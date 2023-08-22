import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";

type RoutesType = {
  id: string;
  path?: string;
  component?: any;
  routes?: RoutesType[];
};

const routesConfig: RoutesType[] = [
    {
      id: 'root',
      path: '/',
      component: () => <Navigate to="/login"/>
    },
    {
      id: 'login',
      path: '/login',
      component: lazy(() => import("src/components/Login"))
    },
    {
      id: 'home',
      path: '/home',
      component: lazy(() => import("src/components/home/Home"))
    },
    {
      id: 'indexmax',
      path: '/indexmax',
      component: lazy(() => import("src/components/max/indexmax/IndexMax"))
    },
    {
      id: 'testimonials',
      path: '/testimonials',
      component: lazy(() => import("src/components/max/testimonials/Testimonials"))
    },
    {
      id: 'tutorials',
      path: '/tutorials',
      component: lazy(() => import("src/components/max/tutorials/Tutorials"))
    },
    {
      id: 'classes',
      path: '/classes',
      component: lazy(() => import("src/components/classes/Classes"))
    },
    {
      id: 'register',
      path: '/register',
      component: lazy(() => import("src/components/CreateUser"))
    },
    {
      id: 'CreateClass',
      path: '/CreateClass',
      component: lazy(() => import("src/components/CreateClass"))
    },
  ]

  const renderRoutes = (routes: RoutesType[]) =>
  routes ? (
    <Suspense fallback={<Spinner/> /*<LoadingScreen />*/}>
      <Routes>
        {routes.map((route) => {
          // const Guard = route.guard || Fragment;
          // const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={route.id}
              path={route.path ?? ''}
              element={
                // <Guard>
                  // <Layout>
                    route.routes ? renderRoutes(route.routes) : <Component />
                  // </Layout>
                // </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : null;

  const RenderedRoutes = () => {
    return renderRoutes(routesConfig);
  };
  
  export default RenderedRoutes;