import data from "../data";
import Product from "./Product";

export default function Products() {
  const productsElem = data.map((item) => {
    return <Product info={item} key={item.id} />;
  });

  return <div className="products--page">{productsElem}</div>;
}
