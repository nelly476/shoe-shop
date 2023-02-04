import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Contact from "./components/Contact";
import CartModal from "./components/CartModal";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  function openCart() {
    setCartClicked((prev) => !prev);
  }

  return (
    <div className="app">
      <Header openCart={openCart} />

      <CartModal cartClicked={cartClicked} openCart={openCart} />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
