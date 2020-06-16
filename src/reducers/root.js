import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { auth } from 'reducers/auth';
import { AUTH_CLEAR_STORE } from 'actions/auth';

const persistWhitelist = ['auth'];

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: persistWhitelist,
};

const appReducer = combineReducers({ auth });

const rootReducer = (state, action) => {
  if (action.type === AUTH_CLEAR_STORE) {
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
