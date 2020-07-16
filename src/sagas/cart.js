import { takeLatest, call, all, put } from 'redux-saga/effects';

import {
  cartUpdate,
  ADD_TO_CART_REQUEST,
  CART_REQUEST,
  CART_BY_PRODUCT_ID_REQUEST,
  cartByProductIdUpdate,
} from 'actions/cart';

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

function* handlecartRequest(action) {
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

function* watchcartRequest() {
  yield takeLatest(CART_REQUEST, handlecartRequest);
}

function* handlecartByProductIdRequest(action) {
  const { productId, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Cart.getByProductId, productId);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    yield put(cartByProductIdUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchcartByProductIdRequest() {
  yield takeLatest(CART_BY_PRODUCT_ID_REQUEST, handlecartByProductIdRequest);
}

export default function* cartSaga() {
  yield all([watchAddToCartRequest(), watchcartRequest(), watchcartByProductIdRequest()]);
}
