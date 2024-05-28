import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Destination from "./components/Pages/Destination/Destination";
import About from "./components/Pages/About/About";
import TransitionWrapper from "./components/TransitionWrapper";
import Introduction from "./components/Pages/Home/Introduction";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <TransitionWrapper>
              <Home />
            </TransitionWrapper>
          }
        />
        <Route
          path="/destination"
          element={
            <TransitionWrapper>
              <Destination />
            </TransitionWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionWrapper>
              <About />
            </TransitionWrapper>
          }
        />
        <Route
          path="/introduction"
          element={
            <TransitionWrapper>
              <Introduction />
            </TransitionWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
