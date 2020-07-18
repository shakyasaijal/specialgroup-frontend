import { takeLatest, call, all, put, takeEvery } from 'redux-saga/effects';

import { cartUpdate, ADD_TO_CART_REQUEST, CART_REQUEST, CART_DELETE_REQUEST, CHANGE_CART_REQUEST } from 'actions/cart';

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

function* handleCartRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.get);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    yield put(cartUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchCartRequest() {
  yield takeEvery(CART_REQUEST, handleCartRequest);
}

function* handleChangeCartRequest(action) {
  const { id, quantity, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.put, id, quantity);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchChangeCarteRequest() {
  yield takeLatest(CHANGE_CART_REQUEST, handleChangeCartRequest);
}

function* handleCartDeleteRequest(action) {
  const { id, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.delete, id);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchCartDeleteRequest() {
  yield takeLatest(CART_DELETE_REQUEST, handleCartDeleteRequest);
}

export default function* cartSaga() {
  yield all([watchAddToCartRequest(), watchCartRequest(), watchChangeCarteRequest(), watchCartDeleteRequest()]);
}
