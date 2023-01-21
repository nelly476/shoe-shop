export default function Product(props) {
  //   console.log(props.info);
  const { id, name, price, img } = props.info;

  //   console.log(img);
  return (
    <div>
      <img
        src={img}
        alt="image of the shoes"
        className={id === 2 ? "object--fit" : ""}
      />
      <h2>{name}</h2>
    </div>
  );
}
