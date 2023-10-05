import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h3>Cart: {cart.length}</h3>
      {cart.map((bottle) => (
        <img src={bottle.img}></img>
      ))}
    </div>
  );
};

export default Cart;
