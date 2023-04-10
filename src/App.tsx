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
  apiKey: "AIzaSyBWKRmXmg90tCk7kuIYI4FGl-_86ensMiM",
  authDomain: "house-code.firebaseapp.com",
  projectId: "house-code",
  storageBucket: "house-code.appspot.com",
  messagingSenderId: "829337627544",
  appId: "1:829337627544:web:54e35bc5732ed2df1159ed",
  measurementId: "G-7P33F63ZN9"
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
