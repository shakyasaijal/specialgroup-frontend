import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { persistConfig } from 'reducers/root';
import rootSaga from 'sagas/root';

class ReduxService {
  constructor() {
    this.sagaMiddleware = createSagaMiddleware();
    const middlewares = [this.sagaMiddleware];
    const composeEnhancers = compose;

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    this.store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
  }

  runMiddlewares(callback) {
    persistStore(this.store, null, () => {
      this.sagaMiddleware.run(rootSaga);
      callback();
    });
  }

  getState() {
    return this.store.getState();
  }

  dispatch(action) {
    this.store.dispatch(action);
  }

  dispatchFromAction(dispatch, actionFunc) {
    /**
     * This is to create dispatch functions from action functions, where the
     * action function has the exact same parameters as the dispatch function.
     *
     * @param args
     */
    /* eslint-disable */
    return (...args) => {
      dispatch(actionFunc(...args));
    };
  }

  dispatchesFromActions(dispatch, actionFuncMap) {
    /**
     * This takes a map of action names to action functions, and returns a map
     * of dispatch names to dispatch functions.
     */
    const dispatchFuncMap = {};

    for (const funcName in actionFuncMap) {
      const func = actionFuncMap[funcName];

      dispatchFuncMap[funcName] = this.dispatchFromAction(dispatch, func);
    }

    return dispatchFuncMap;
  }

  mapDispatchToPropsFromActions(actionFuncMap) {
    /**
     * This takes a map of action names to action functions, and returns a
     * mapDispatchToProps function which can be used by redux's connect().
     *
     * @param dispatch
     */
    return (dispatch) => {
      return this.dispatchesFromActions(dispatch, actionFuncMap);
    };
  }
}

const reduxService = new ReduxService();

export default reduxService;
