import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/home/HomeHeader';

import Testimonials from './components/testimonials';
import Tutorials from './components/tutorials';
import Indexmax from './components/indexmax/Indexmax';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/indexmax" element={<Indexmax />} ></Route>
        <Route path="/testimonials" element={<Testimonials />} ></Route>
        <Route path="/tutorials" element={<Tutorials />} ></Route>
      </Routes>
    </Router>
  )
}

export default App
