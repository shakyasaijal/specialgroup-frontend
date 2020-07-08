import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { auth } from 'reducers/auth';
import { account } from 'reducers/account';
import { products, productDetails } from 'reducers/product';
import { locationMap, marketingPlatforms, popularCategories } from 'reducers/publicReducer';

import { AUTH_CLEAR_STORE } from 'actions/auth';

const persistWhitelist = ['auth', 'account', 'products'];

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
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_CLEAR_STORE) {
    let { products } = state;
    const { productDetails } = state;
    const { popularProduct, recommendedProduct, recentArrivals } = products;

    products = { popularProduct, recommendedProduct, recentArrivals };
    state = { products, productDetails };
  }

  return appReducer(state, action);
};

export default rootReducer;
