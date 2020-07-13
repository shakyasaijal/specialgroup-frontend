import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { auth } from 'reducers/auth';
import { account } from 'reducers/account';
import { products, productDetails, productsByCategory } from 'reducers/product';
import { locationMap, marketingPlatforms, popularCategories } from 'reducers/publicReducer';
import { notificationTS } from 'reducers/notificationTS';

import { AUTH_CLEAR_STORE } from 'actions/auth';

const persistWhitelist = ['auth', 'account', 'products', 'notificationTS'];

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: persistWhitelist,
};

const appReducer = combineReducers({
  auth,
  account,
  locationMap,
  marketingPlatforms,
  popularCategories,
  products,
  productDetails,
  productsByCategory,
  notificationTS,
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_CLEAR_STORE) {
    let { products } = state;
    const { productDetails, productsByCategory, notificationTS } = state;
    const { popularProduct, recommendedProduct, recentArrivals, bannerSlider } = products;

    products = { popularProduct, recommendedProduct, recentArrivals, bannerSlider };
    state = { products, productDetails, productsByCategory, notificationTS };
  }

  return appReducer(state, action);
};

export default rootReducer;
