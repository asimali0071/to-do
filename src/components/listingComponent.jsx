const Listing = (props) => {
  const { foodItem } = props;
  return (
    <>
      {props.name}
      <ul className="list">
        <li key={foodItem} className="list-group-item">
          {foodItem}
        </li>
      </ul>
    </>
  );
};

export default Listing;
