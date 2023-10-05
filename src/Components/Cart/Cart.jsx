import PropTypes from "proto-types";

import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h3>Cart: {cart.length}</h3>
      {cart.map((bottle) => (
        <img key={bottle.id} src={bottle.img}></img>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};
export default Cart;
