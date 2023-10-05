import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddCart }) => {
  const {
    img,
    name,
    price,
    quantity,
    category,
    seller,
    shipping,
    ratings,
    ratingsCount,
  } = bottle;
  return (
    <div>
      <div className="bottle">
        <img src={img} alt="" />
        <h2>Bottle name: {name} </h2>
        <h2>Price: ${price}</h2>
        <h2>Category: {category}</h2>
        <h2>Seller: {seller}</h2>
        <h2>Shipping: {shipping}</h2>
        <h2>Ratings: {ratings}</h2>
        <h2>RatingsCount: {ratingsCount}</h2>
        <h2>Quantity: {quantity}</h2>
        <button onClick={() => handleAddCart(bottle)}>PURCHASE</button>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddCart: PropTypes.func.isRequired,
};

export default Bottle;
