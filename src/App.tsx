import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/home/Home';
import Testimonials from './components/max/testimonials/Testimonials';
import Tutorials from './components/max/tutorials/Tutorials';
import IndexMax from './components/max/indexmax/IndexMax';
import Classes from "./components/classes/Classes";


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

export default App
