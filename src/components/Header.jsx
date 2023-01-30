import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Header(props) {
  const { cartItems } = useContext(CartContext);
  const { openCart } = props;

  return (
    <div className="header">
      <h1>
        <Link to="/" className="brand--name">
          ShoeLoves
        </Link>
      </h1>
      <ul className="header--left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={openCart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
}
