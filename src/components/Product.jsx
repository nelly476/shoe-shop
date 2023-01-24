import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product(props) {
  const { id, name, price, img } = props.info;
  const { changeCart } = useContext(CartContext);

  return (
    <div className="product--section">
      <img
        src={img}
        alt="image of the shoes"
        className={id === 2 ? "object--fit" : ""}
      />
      <h2>{name}</h2>
      <span className="price--cart--section">
        <p>{price}</p>
        <button onClick={() => changeCart(id)}>Add to cart</button>
      </span>
    </div>
  );
}
