import { takeLatest, call, all, put } from 'redux-saga/effects';

import { login, signUp } from 'api/auth';

import { authInfoUpdate, authLoginRequest, AUTH_LOGIN_REQUEST, AUTH_REGISTER_REQUEST } from 'actions/auth';

function* handleAuthRegisterRequest(action) {
  const { firstName, lastName, email, password, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(signUp, firstName, lastName, email, password);

    if (!res) throw new Error('connection error');

    yield put(authLoginRequest(email, password, callbackSuccess, callbackError));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError();
  }
}

function* watchAuthRegisterRequest() {
  yield takeLatest(AUTH_REGISTER_REQUEST, handleAuthRegisterRequest);
}

function* handleAuthLoginRequest(action) {
  const { email, password, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(login, email, password);

    if (!res) throw new Error('connection error');

    const { userId, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || !refreshToken) {
      throw new Error('missing required information');
    }

    yield put(authInfoUpdate(userId, accessToken, refreshToken));
    // yield put(accountInfoRequest(id, callbackSuccess, callbackError));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchAuthLoginRequest() {
  yield takeLatest(AUTH_LOGIN_REQUEST, handleAuthLoginRequest);
}

export default function* authSaga() {
  yield all([watchAuthLoginRequest(), watchAuthRegisterRequest()]);
}
