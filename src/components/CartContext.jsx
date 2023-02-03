import { useState } from "react";
import React from "react";
import data from "../data";

const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState("");

  function addToCart(id) {
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
    setCartItems((prev) => {
      return prev.filter((item) => item.numberOfProducts !== 0);
    });
    // console.log(cartItems);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, changeNumberOfProducts }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
