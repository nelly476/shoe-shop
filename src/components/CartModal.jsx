import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import MiniProductCard from "./MiniProductCard";

export default function CartModal(props) {
  const { cartClicked, openCart } = props;
  const { cartItems } = useContext(CartContext);
  const [cartInfo, setCartInfo] = useState("");
  const [cartElem, setCartElem] = useState("");

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartElem(
        cartItems.map((item) => {
          return <MiniProductCard item={item} key={item.id} />;
        })
      );
    }
  }, [cartItems]);

  // function getMinis() {
  //   if (cartItems.length > 0) {
  //     return cartItems.map((item) => {
  //       return <MiniProductCard item={item} key={item.id} />;
  //     });
  //   }
  //   return "";
  // }

  return (
    <span className="cart--modal">
      <h1>Your shopping cart</h1>
      {cartElem}
      <h2>Total: $0.0</h2>
      <div className="button--container">
        <button className="checkout--btn">Checkout</button>
        <button className="close--cart--btn" onClick={openCart}>
          Close
        </button>
      </div>
    </span>
  );
}
