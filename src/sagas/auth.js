import { takeLatest, call, all, put, select } from 'redux-saga/effects';

import { login, signUp, googleLogin, facebookLogin, logout, resendVerificationEmail } from 'api/auth';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  AUTH_GOOGLE_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  authInfoUpdate,
  authClearStore,
  AUTH_LOGOUT_REQUEST,
  RESEND_VERIFICATION_EMAIL_REQUEST,
} from 'actions/auth';

import { accountInfoRequest } from 'actions/account';
import { getAccessToken, getRefreshToken } from 'selectors/auth';
import { getReferralCode } from 'selectors/referral';

function* handleAuthRegisterRequest(action) {
  const { firstName, lastName, email, password, callbackSuccess, callbackError } = action;

  try {
    const referralCode = yield select(getReferralCode);
    const res = yield call(signUp, firstName, lastName, email, password, referralCode);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
    yield put(accountInfoRequest(userId, callbackSuccess, callbackError));
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

    if (!res.status) throw new Error(res.data.message);

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
    const referralCode = yield select(getReferralCode);
    const res = yield call(googleLogin, idToken, referralCode);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

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
    const referralCode = yield select(getReferralCode);
    const res = yield call(facebookLogin, facebookToken, referralCode);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

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

function* handleAuthLogoutRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const accessToken = yield select(getAccessToken);
    const refreshToken = yield select(getRefreshToken);

    yield call(logout, accessToken, refreshToken);

    yield put(authClearStore());
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError();
  }
}

function* WatchHandleAuthLogoutRequest() {
  yield takeLatest(AUTH_LOGOUT_REQUEST, handleAuthLogoutRequest);
}

function* handleResendVerificationEmailRequest(action) {
  const { email, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(resendVerificationEmail, email);

    if (!res.status) throw new Error(res.data.message);

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchHandleResendVerificationEmail() {
  yield takeLatest(RESEND_VERIFICATION_EMAIL_REQUEST, handleResendVerificationEmailRequest);
}

export default function* authSaga() {
  yield all([
    watchAuthRegisterRequest(),
    watchAuthLoginRequest(),
    watchAuthGoogleRequest(),
    watchAuthFacebookRequest(),
    WatchHandleAuthLogoutRequest(),
    watchHandleResendVerificationEmail(),
  ]);
}
