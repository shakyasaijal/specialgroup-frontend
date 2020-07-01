import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { auth } from 'reducers/auth';
import { account } from 'reducers/account';
import { locationMap, marketingPlatforms, popularCategories } from 'reducers/publicReducer';

import { AUTH_CLEAR_STORE } from 'actions/auth';

const persistWhitelist = ['auth', 'account'];

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: persistWhitelist,
};

const appReducer = combineReducers({ auth, account, locationMap, marketingPlatforms, popularCategories });

const rootReducer = (state, action) => {
  if (action.type === AUTH_CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
