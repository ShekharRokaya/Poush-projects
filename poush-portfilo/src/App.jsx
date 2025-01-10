/* 
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Contact from './Component/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </>
  )
}

export default App */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Service from './Component/Service';
import About from './Component/About'

import Contact from './Component/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

