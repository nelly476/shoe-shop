import { useState, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Contact from "./components/Contact";
import CartModal from "./components/CartModal";

function App() {
  useEffect(() => {
    (async function t() {
      let res = await fetch("https://opentdb.com/api.php?amount=10");
      let data = await res.json();
      console.log(data.results);
    })();

    // fetch("https://opentdb.com/api.php?amount=10")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.results));
  }, []);

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
