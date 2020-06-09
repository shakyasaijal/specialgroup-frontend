import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import auth from './auth';

const persistWhitelist = ['auth'];

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: persistWhitelist,
};

const appReducer = combineReducers({ auth });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
