import { takeLatest, call, all, put } from 'redux-saga/effects';

import {
  LOCATION_MAP_REQUEST,
  locationMapUpdate,
  MARKETING_PLATFORM_REQUEST,
  marketingPlatformUpdate,
  POPULAR_CATEGORY_REQUEST,
  popularCategoryUpdate,
  ORDER_HELP_REQUEST,
  orderHelpUpdate,
  FAQ_REQUEST,
  faqUpdate,
} from 'actions/publicAction';

import { getLocationMap, getMarketingPlatforms, getPopularCategories, getOrderHelp, getFaq } from 'api/publicapi';

function* handleLocationMapRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getLocationMap);

    if (!res) throw new Error('connection error');

    const locationMap = res.data;

    yield put(locationMapUpdate(locationMap));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchLocationMapRequest() {
  yield takeLatest(LOCATION_MAP_REQUEST, handleLocationMapRequest);
}

function* handleMarketingPlatformRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getMarketingPlatforms);

    if (!res) throw new Error('connection error');

    const marketingPlatforms = res.data;

    yield put(marketingPlatformUpdate(marketingPlatforms));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchMarketingPlatformRequest() {
  yield takeLatest(MARKETING_PLATFORM_REQUEST, handleMarketingPlatformRequest);
}

function* handlePopularCategoryRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getPopularCategories);

    if (!res) throw new Error('connection error');
    const popularCategories = res.data;

    yield put(popularCategoryUpdate(popularCategories));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchPopularCategoryRequest() {
  yield takeLatest(POPULAR_CATEGORY_REQUEST, handlePopularCategoryRequest);
}

function* handleOrderHelpRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getOrderHelp);

    if (!res && !res.status) throw new Error('connection error');
    const orderHelp = res.data;

    yield put(orderHelpUpdate(orderHelp));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchOrderHelpRequest() {
  yield takeLatest(ORDER_HELP_REQUEST, handleOrderHelpRequest);
}

function* handleFaqRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getFaq);

    if (!res && !res.status) throw new Error('connection error');
    const faq = res.data;

    yield put(faqUpdate(faq));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchFaqRequest() {
  yield takeLatest(FAQ_REQUEST, handleFaqRequest);
}

export default function* publicSaga() {
  yield all([
    watchLocationMapRequest(),
    watchMarketingPlatformRequest(),
    watchPopularCategoryRequest(),
    watchOrderHelpRequest(),
    watchFaqRequest(),
  ]);
}
