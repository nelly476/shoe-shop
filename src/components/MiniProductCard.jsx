import { useState } from "react";

export default function MiniProductCard(props) {
  const { id, name, price, img } = props.item;
  const [amount, setAmount] = useState(1);

  function changeCount(num) {
    setAmount((prev) => prev + num);
  }

  return (
    <span className="mini--product--card">
      <img src={img} alt="" />
      <div className="mini--name--price">
        <h3>{name}</h3>
        <p>{price}</p>
        <span className="add--remove--section">
          <i className="fa-solid fa-minus" onClick={() => changeCount(-1)}></i>
          <p>{amount}</p>
          <i className="fa-solid fa-plus" onClick={() => changeCount(1)}></i>
        </span>
      </div>
    </span>
  );
}
