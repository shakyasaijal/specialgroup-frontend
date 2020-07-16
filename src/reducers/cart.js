import { CART_UPDATE, CART_BY_PRODUCT_ID_UPDATE } from 'actions/cart';

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

export const cartByProductId = (state = defaultState, action) => {
  switch (action.type) {
    case CART_BY_PRODUCT_ID_UPDATE: {
      const { cartByProductId } = action;

      return { ...state, ...cartByProductId };
    }
    default:
      return state;
  }
};
