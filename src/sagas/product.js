import { takeLatest, all, put, call } from 'redux-saga/effects';

import Product from 'api/product';

import {
  SHOP_BY_CATEGORY_REQUEST,
  POPULAR_PRODUCT_REQUEST,
  RECOMMENDED_PRODUCT_REQUEST,
  RECENT_ARRIVALS_REQUEST,
  FOR_YOU_PRODUCT_REQUEST,
  shopByCategoryUpdate,
  popularProductUpdate,
  recommendedProductUpdate,
  recentArrivalsUpdate,
  forYouProductUpdate,
} from 'actions/product';

function* handleShopByCategoryRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.shopByCategory);

    if (!res.status) throw new Error(res.data.message);

    yield put(shopByCategoryUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchShopByCategoryRequest() {
  yield takeLatest(SHOP_BY_CATEGORY_REQUEST, handleShopByCategoryRequest);
}

function* handlePopularProductRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.popular);

    if (!res.status) throw new Error(res.data.message);

    yield put(popularProductUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchPopularProductRequest() {
  yield takeLatest(POPULAR_PRODUCT_REQUEST, handlePopularProductRequest);
}

function* handleRecommendedProductRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.recommended);

    if (!res.status) throw new Error(res.data.message);

    yield put(recommendedProductUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchRecommendedProductRequest() {
  yield takeLatest(RECOMMENDED_PRODUCT_REQUEST, handleRecommendedProductRequest);
}

function* handleRecentArrivalsRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.recentArrivals);

    if (!res.status) throw new Error(res.data.message);

    yield put(recentArrivalsUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchRecentArrivalsRequest() {
  yield takeLatest(RECENT_ARRIVALS_REQUEST, handleRecentArrivalsRequest);
}

function* handleForYouProductRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.forYou);

    if (!res.status) throw new Error(res.data.message);

    yield put(forYouProductUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchForYouProductRequest() {
  yield takeLatest(FOR_YOU_PRODUCT_REQUEST, handleForYouProductRequest);
}

export default function* productSaga() {
  yield all([
    watchShopByCategoryRequest(),
    watchPopularProductRequest(),
    watchRecommendedProductRequest(),
    watchRecentArrivalsRequest(),
    watchForYouProductRequest(),
  ]);
}
