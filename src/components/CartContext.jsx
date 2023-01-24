import { useState } from "react";
import React from "react";

const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState("");

  function changeCart(id) {
    setCartItems((prev) => {
      return [...prev, id];
    });
    console.log(cartItems);
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, changeCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
