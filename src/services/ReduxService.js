import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer, { persistConfig } from 'reducers/root';
import rootSaga from 'sagas/root';

const LOGGER = createLogger({
  collapsed: true,
});

const SAGA_MIDDLEWARE = createSagaMiddleware();
const middlewares = [SAGA_MIDDLEWARE];

// for debugging purpose - should only be enabled for local and dev
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middlewares.push(LOGGER);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const STORE = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const runMiddlewares = (callback) => {
  persistStore(STORE, null, () => {
    SAGA_MIDDLEWARE.run(rootSaga);
    callback();
  });
};

export const getStore = () => {
  return STORE;
};

export const getState = () => {
  return STORE.getState();
};

export const dispatchFromStore = (action) => {
  STORE.dispatch(action);
};

export const dispatchFromAction = (dispatch, actionFunc) => {
  return (...args) => {
    dispatch(actionFunc(...args));
  };
};

export const dispatchesFromActions = (dispatch, actionFuncMap) => {
  const dispatchFuncMap = {};

  for (const funcName in actionFuncMap) {
    const func = actionFuncMap[funcName];

    dispatchFuncMap[funcName] = dispatchFromAction(dispatch, func);
  }

  return dispatchFuncMap;
};

export const mapDispatchToPropsFromActions = (actionFuncMap) => {
  return (dispatch) => {
    return dispatchesFromActions(dispatch, actionFuncMap);
  };
};
