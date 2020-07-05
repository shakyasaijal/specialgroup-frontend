import { takeEvery, call, all, put, select } from 'redux-saga/effects';

import { isLoggedIn } from 'selectors/auth';

import { getProductsWithoutAuth, getProductWithAuth } from 'api/product';
import { productListUpdate, PRODUCT_LIST_REQUEST } from 'actions/product';

function* handleProductListRequest(action) {
  const { callbackSuccess, callbackError } = action;
  const loggedIn = yield select(isLoggedIn);

  try {
    const productRequestFn = loggedIn ? getProductWithAuth : getProductsWithoutAuth;

    const res = yield call(productRequestFn);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    const products = res.data;

    yield put(productListUpdate(products));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchProductListRequest() {
  yield takeEvery(PRODUCT_LIST_REQUEST, handleProductListRequest);
}

export default function* productSaga() {
  yield all([watchProductListRequest()]);
}
