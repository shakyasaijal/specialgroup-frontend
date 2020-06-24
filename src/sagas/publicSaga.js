import { takeLatest, call, all, put } from 'redux-saga/effects';

import { LOCATION_MAP_REQUEST, locationMapUpdate } from 'actions/publicAction';

import { getLocationMap } from 'api/publicapi';

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

export default function* publicSaga() {
  yield all([watchLocationMapRequest()]);
}
