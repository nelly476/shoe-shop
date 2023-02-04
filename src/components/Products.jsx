import data from "../data";
import Product from "./Product";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function Products() {
  const { CartItems } = useContext(CartContext);
  const productsElem = data.map((item) => {
    return <Product info={item} key={item.id} />;
  });

  return <div className="products--page">{productsElem}</div>;
}
