export default function Product(props) {
  //   console.log(props.info);
  const { id, name, price, img } = props.info;

  //   console.log(img);
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
        <button>Add to cart</button>
      </span>
    </div>
  );
}
