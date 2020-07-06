import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { auth } from 'reducers/auth';
import { account } from 'reducers/account';
import { products } from 'reducers/product';
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
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_CLEAR_STORE) {
    let { products } = state;
    const { popularProduct, recommendedProduct } = products;

    products = { popularProduct, recommendedProduct };
    state = { products };
  }

  return appReducer(state, action);
};

export default rootReducer;
