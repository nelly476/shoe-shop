import { useState } from "react";
import React from "react";
import data from "../data";

const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState("");

  function changeCart(id) {
    setCartItems((prev) => {
      const target = data.filter((item) => item.id === id)[0];
      target.numberOfProducts = 1;
      return [...prev, target];
    });
  }

  function changeNumberOfProducts(id, num) {
    setCartItems((prev) => {
      return prev.map((item) => {
        return item.id === id
          ? { ...item, numberOfProducts: item.numberOfProducts + num }
          : item;
      });
    });
    // console.log(cartItems.length);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, changeCart, changeNumberOfProducts }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
