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
  PRODUCT_DETAILS_REQUEST,
  productDetailsUpdate,
  bannerDataUpdate,
  BANNER_DATA_REQUEST,
  productsByCategoryUpdate,
  PRODUCTS_BY_CATEGORY_REQUEST,
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

function* handleProductDetailsRequest(action) {
  const { id, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.productDetails, id);

    if (!res.status) throw new Error(res.data.message);

    yield put(productDetailsUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchProductDetailsRequest() {
  yield takeLatest(PRODUCT_DETAILS_REQUEST, handleProductDetailsRequest);
}

function* handleBannerDataRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.bannerSlider);

    if (!res.status) throw new Error(res.data.message);

    yield put(bannerDataUpdate(res.data));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError();
  }
}

function* watchBannerDataRequest() {
  yield takeLatest(BANNER_DATA_REQUEST, handleBannerDataRequest);
}

function* handleProductsByCategoryRequest(action) {
  const { id, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Product.productsByCategory, id);

    if (!res.status) throw new Error(res.data.message);

    yield put(productsByCategoryUpdate(res.data, id));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchProductsByCategoryRequest() {
  yield takeLatest(PRODUCTS_BY_CATEGORY_REQUEST, handleProductsByCategoryRequest);
}

export default function* productSaga() {
  yield all([
    watchShopByCategoryRequest(),
    watchPopularProductRequest(),
    watchRecommendedProductRequest(),
    watchRecentArrivalsRequest(),
    watchForYouProductRequest(),
    watchProductDetailsRequest(),
    watchBannerDataRequest(),
    watchProductsByCategoryRequest(),
  ]);
}
