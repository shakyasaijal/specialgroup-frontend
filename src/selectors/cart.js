export const getCart = (state) => {
  if (!state.cart) return null;

  return state.cart;
};
