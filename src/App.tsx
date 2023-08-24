import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RenderedRoutes from "./Routes";
import UserProvider from "./userProvider";

const firebaseConfig = {
  apiKey: "AIzaSyC-y8LYoMEH4BMbWHWi0Drl2pNigl_L7PY",
  authDomain: "home-of-code.firebaseapp.com",
  projectId: "home-of-code",
  storageBucket: "home-of-code.appspot.com",
  messagingSenderId: "1063074137923",
  appId: "1:1063074137923:web:fb0513cd180c3151acd1f6",
  measurementId: "G-KJEB4MKCKZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Router data-testid="router">
          <RenderedRoutes />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserProvider>
  );
}

export { App, app, analytics };
