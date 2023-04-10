import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/home/Home';
import Testimonials from './components/max/testimonials/Testimonials';
import Tutorials from './components/max/tutorials/Tutorials';
import IndexMax from './components/max/indexmax/IndexMax';
import Classes from "./components/classes/Classes";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-y8LYoMEH4BMbWHWi0Drl2pNigl_L7PY",
  authDomain: "home-of-code.firebaseapp.com",
  projectId: "home-of-code",
  storageBucket: "home-of-code.appspot.com",
  messagingSenderId: "1063074137923",
  appId: "1:1063074137923:web:fb0513cd180c3151acd1f6",
  measurementId: "G-KJEB4MKCKZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/indexmax" element={<IndexMax />} ></Route>
        <Route path="/testimonials" element={<Testimonials />} ></Route>
        <Route path="/tutorials" element={<Tutorials />} ></Route>
        <Route path="/classes" element={<Classes />} ></Route>
      </Routes>
    </Router>
  )
}

export {App, app, analytics}
