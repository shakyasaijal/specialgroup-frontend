export const getCart = (state) => {
  if (!state.cart) return null;

  return state.cart;
};

export const getCartLength = (state) => {
  const cart = getCart(state);
  let cartLength = 0;

  if (cart.product) {
    cartLength = cart.product.reduce((a, b) => +a + +b.quantity, 0);
  }

  return cartLength;
};
