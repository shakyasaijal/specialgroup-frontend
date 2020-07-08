import {
  SHOP_BY_CATEGORY_UPDATE,
  POPULAR_PRODUCT_UPDATE,
  RECOMMENDED_PRODUCT_UPDATE,
  RECENT_ARRIVALS_UPDATE,
  FOR_YOU_PRODUCT_UPDATE,
  PRODUCT_DETAILS_UPDATE,
} from 'actions/product';

const defaultState = {};

export const products = (state = defaultState, action) => {
  const { product } = action;

  switch (action.type) {
    case SHOP_BY_CATEGORY_UPDATE: {
      return { ...state, shopByCategory: product };
    }
    case POPULAR_PRODUCT_UPDATE: {
      return { ...state, popularProduct: product };
    }
    case RECOMMENDED_PRODUCT_UPDATE: {
      return { ...state, recommendedProduct: product };
    }
    case RECENT_ARRIVALS_UPDATE: {
      return { ...state, recentArrivals: product };
    }
    case FOR_YOU_PRODUCT_UPDATE: {
      return { ...state, forYouProduct: product };
    }
    default:
      return state;
  }
};

export const productDetails = (state = defaultState, action) => {
  const { productDetails } = action;

  switch (action.type) {
    case PRODUCT_DETAILS_UPDATE: {
      return { ...state, ...productDetails };
    }
    default:
      return state;
  }
};
