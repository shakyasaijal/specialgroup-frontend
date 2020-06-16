import { takeLatest, call, all, put } from 'redux-saga/effects';

import { login, signUp } from 'api/auth';

import { authInfoUpdate, AUTH_LOGIN_REQUEST, AUTH_REGISTER_REQUEST } from 'actions/auth';

function* handleAuthRegisterRequest(action) {
  const { firstName, lastName, email, password, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(signUp, firstName, lastName, email, password);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
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

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || !refreshToken) {
      throw new Error('missing required information');
    }

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
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
