import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS } from "../../Utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  return (
    <div>
      <h2>Bottle Available: {bottles.length}</h2>
      <h3>Total Purchase: {cart.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddCart={handleAddCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
