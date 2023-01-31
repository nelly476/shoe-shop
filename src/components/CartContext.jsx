import { useState } from "react";
import React from "react";
import data from "../data";

const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState("");

  function changeCart(id) {
    setCartItems((prev) => {
      const target = data.filter((item) => item.id === id)[0];
      return [...prev, target];
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, changeCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
