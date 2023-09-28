import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RenderedRoutes from "./Routes";
import UserProvider from "./UserProvider";

const firebaseConfig = {
  apiKey: "AIzaSyANXn-5EyV7Ew3GRBzfNSrD-DfGefxzRQY",
  authDomain: "home-of-code-d2847.firebaseapp.com",
  projectId: "home-of-code-d2847",
  storageBucket: "home-of-code-d2847.appspot.com",
  messagingSenderId: "922140322810",
  appId: "1:922140322810:web:fee2cc22ff5b3157059243",
  measurementId: "G-JHF8TNV6KK",
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
