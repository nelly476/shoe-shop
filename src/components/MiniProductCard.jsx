import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function MiniProductCard(props) {
  const { id, name, price, img, numberOfProducts } = props.item;
  const { changeNumberOfProducts } = useContext(CartContext);

  return (
    <span className="mini--product--card">
      <img src={img} alt="product image" />
      <div className="mini--name--price">
        <h3>{name}</h3>
        <p>${price}</p>
        <span className="add--remove--section">
          <i
            className="fa-solid fa-minus"
            onClick={() => changeNumberOfProducts(id, -1)}
          ></i>
          <p>{numberOfProducts}</p>
          <i
            className="fa-solid fa-plus"
            onClick={() => changeNumberOfProducts(id, 1)}
          ></i>
        </span>
      </div>
    </span>
  );
}
