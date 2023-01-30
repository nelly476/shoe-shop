import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product(props) {
  const { id, name, price, img } = props.info;
  const { changeCart } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  function addToCart(id) {
    changeCart(id);
    setAddedToCart(true);
  }

  return (
    <div className="product--card">
      <img
        src={img}
        alt="image of the shoes"
        className={id === 2 ? "object--fit" : ""}
      />
      <h2>{name}</h2>
      <span className="price--cart--section">
        <p>{price}</p>

        {addedToCart ? (
          <button className="remove--button">Open cart</button>
        ) : (
          <button className="add--to--cart" onClick={() => addToCart(id)}>
            Add to cart
          </button>
        )}
      </span>
    </div>
  );
}
