import { takeLatest, call, all, put } from 'redux-saga/effects';

import { cartDataUpdate, ADD_TO_CART_REQUEST, CART_DATA_REQUEST } from 'actions/cart';

import Cart from 'api/cart';

function* handleAddToCartRequest(action) {
  const { productId, quantity, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.post, productId, quantity);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchAddToCartRequest() {
  yield takeLatest(ADD_TO_CART_REQUEST, handleAddToCartRequest);
}

function* handleCartDataRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.get);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    yield put(cartDataUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchCartDataRequest() {
  yield takeLatest(CART_DATA_REQUEST, handleCartDataRequest);
}

export default function* cartSaga() {
  yield all([watchAddToCartRequest(), watchCartDataRequest()]);
}
