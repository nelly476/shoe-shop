import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </div>
  );
}

export default App;
