import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Destination from './components/Pages/Destination/Destination'
import About from './components/Pages/About/About'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App

