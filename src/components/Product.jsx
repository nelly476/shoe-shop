import { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

export default function Product(props) {
  const { id, name, price, img } = props.info;
  const { addToCart, cartItems } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      setAddedToCart(cartItems.find((item) => item.id === id));
    } else {
      setAddedToCart(false);
    }
  }, [cartItems]);

  return (
    <div className="product--card">
      <img
        src={img}
        alt="image of the shoes"
        className={id === 2 ? "object--fit" : ""}
      />
      <h2>{name}</h2>
      <span className="price--cart--section">
        <p>${price}</p>

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
