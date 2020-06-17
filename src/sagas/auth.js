import { takeLatest, call, all, put } from 'redux-saga/effects';

import { login, signUp, googleLogin, facebookLogin } from 'api/auth';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  AUTH_GOOGLE_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  authInfoUpdate,
} from 'actions/auth';

import { accountInfoRequest } from 'actions/account';

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

    if (!res.status) throw new Error(res.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || !refreshToken) {
      throw new Error('missing required information');
    }

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
    yield put(accountInfoRequest(userId, callbackSuccess, callbackError));
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchAuthLoginRequest() {
  yield takeLatest(AUTH_LOGIN_REQUEST, handleAuthLoginRequest);
}

function* handleAuthGoogleRequest(action) {
  const { idToken, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(googleLogin, idToken);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || !refreshToken) {
      throw new Error('missing required information');
    }

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
    yield put(accountInfoRequest(userId, callbackSuccess, callbackError));
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchAuthGoogleRequest() {
  yield takeLatest(AUTH_GOOGLE_REQUEST, handleAuthGoogleRequest);
}

function* handleAuthFacebookRequest(action) {
  const { facebookToken, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(facebookLogin, facebookToken);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || !refreshToken) {
      throw new Error('missing required information');
    }

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
    yield put(accountInfoRequest(userId, callbackSuccess, callbackError));
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchAuthFacebookRequest() {
  yield takeLatest(AUTH_FACEBOOK_REQUEST, handleAuthFacebookRequest);
}

export default function* authSaga() {
  yield all([
    watchAuthRegisterRequest(),
    watchAuthLoginRequest(),
    watchAuthGoogleRequest(),
    watchAuthFacebookRequest(),
  ]);
}
