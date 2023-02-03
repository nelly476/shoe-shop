import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product(props) {
  const { id, name, price, img } = props.info;
  const { addToCart } = useContext(CartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  function changeButton(id) {
    addToCart(id);

    // setAddedToCart(
    //   cartItems.forEach((item) => {
    //     return item.id === id ? true : false;
    //   })
    // );
  }

  // console.log(cartItems.includes)

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
          <button className="add--to--cart" onClick={() => changeButton(id)}>
            Add to cart
          </button>
        )}
      </span>
    </div>
  );
}
