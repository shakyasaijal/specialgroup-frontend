export const getCart = (state) => {
  if (!state.cart) return null;

  return state.cart;
};

export const getCartByProductId = (state) => {
  if (!state.cartByProductId) return null;

  return state.cartByProductId;
};
