import { takeLatest, call, all, put } from 'redux-saga/effects';

import {
  LOCATION_MAP_REQUEST,
  locationMapUpdate,
  MARKETING_PLATFORM_REQUEST,
  marketingPlatformUpdate,
  popularCategoryUpdate,
  POPULAR_CATEGORY_REQUEST,
} from 'actions/publicAction';

import { getLocationMap, getMarketingPlatforms, getPopularCategories } from 'api/publicapi';

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

export default function* publicSaga() {
  yield all([watchLocationMapRequest(), watchMarketingPlatformRequest(), watchPopularCategoryRequest()]);
}
