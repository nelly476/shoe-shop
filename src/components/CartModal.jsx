export default function CartModal(props) {
  const { cartClicked, openCart } = props;

  return (
    <span className="cart--modal">
      <h1>Your shopping cart</h1>
      <h2>Total: $0.0</h2>
      <button className="checkout--btn">Checkout</button>
      <button className="close--cart--btn" onClick={openCart}>
        Close
      </button>
    </span>
  );
}
