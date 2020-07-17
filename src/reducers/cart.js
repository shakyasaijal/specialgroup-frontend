import { CART_UPDATE } from 'actions/cart';

const defaultState = {};

export const cart = (state = defaultState, action) => {
  switch (action.type) {
    case CART_UPDATE: {
      const { cart } = action;

      return { ...state, ...cart };
    }
    default:
      return state;
  }
};
