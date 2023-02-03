import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import MiniProductCard from "./MiniProductCard";

export default function CartModal(props) {
  const { cartClicked, openCart } = props;
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0.0);
  const [cartElem, setCartElem] = useState("");

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartElem(
        cartItems.map((item) => {
          return <MiniProductCard item={item} key={item.id} />;
        })
      );
      setTotal(
        cartItems
          .map((item) => {
            return item.price * item.numberOfProducts;
          })
          .reduce((a, b) => {
            return a + b;
          }, 0)
          .toFixed(2)
      );
    }
  }, [cartItems]);

  return (
    <span className="cart--modal">
      <h1>Your shopping cart</h1>
      {cartElem}
      <h2>Total: ${total}</h2>
      <div className="button--container">
        <button className="checkout--btn">Checkout</button>
        <button className="close--cart--btn" onClick={openCart}>
          Close
        </button>
      </div>
    </span>
  );
}
