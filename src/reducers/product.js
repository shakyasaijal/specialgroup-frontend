import { PRODUCT_LIST_UPDATE } from 'actions/product';

const defaultState = {};

export const products = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_UPDATE: {
      const { products } = action;

      return { ...products };
    }
    default:
      return state;
  }
};
