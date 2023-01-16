import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <span>
        <h1>
          BEST SHOES. <br /> FOR YOU.
        </h1>
        <Link to="/products">
          <button className="shop--now--link">Shop now</button>
        </Link>
      </span>
      <img src="./public/landing-page.jpg" alt="" className="landing--image" />
    </div>
  );
}
