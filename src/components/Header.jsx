import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="brand--name">
          ShoeLoves
        </Link>
      </h1>
      <div className="header--left">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/products">Products</Link>
        </h1>
        <h1>
          <Link to="/contact">Contact</Link>
        </h1>
        <h1>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </h1>
      </div>
    </div>
  );
}
