export default function MiniProductCard(props) {
  const { id, name, price, img } = props.item;
  return (
    <span className="product--card">
      <p>{name}</p>
      <p>{price}</p>
      <img src={img} alt="" />
    </span>
  );
}
