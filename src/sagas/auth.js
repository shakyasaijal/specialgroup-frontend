import { takeLatest, all, call } from 'redux-saga/effects';

import { AUTH_LOGIN_REQUEST } from 'actions/auth';

function* handleAuthLoginRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    // api call
    yield call();
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchAuthLoginRequest() {
  yield takeLatest(AUTH_LOGIN_REQUEST, handleAuthLoginRequest);
}

export default function* authSaga() {
  yield all([watchAuthLoginRequest()]);
}
