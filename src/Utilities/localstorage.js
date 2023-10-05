const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const cartStringFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringFied);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLs(cart);
};
export { addToLS, getStoredCart };
