import { takeLatest, call, all, put } from 'redux-saga/effects';

import { getAccountInfo, resetPassword, updateAccountInfo, changePassword } from 'api/account';

import {
  ACCOUNT_INFO_REQUEST,
  accountInfoUpdate,
  RESET_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  UPDATE_ACCOUNT_INFO_REQUEST,
} from 'actions/account';
import { authInfoUpdate } from 'actions/auth';

function* handleAccountInfoRequest(action) {
  const { userId, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(getAccountInfo, userId);

    if (!res) throw new Error('connection error');

    const account = res.data;

    yield put(accountInfoUpdate(account));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError();
  }
}

function* watchAccountInfoRequest() {
  yield takeLatest(ACCOUNT_INFO_REQUEST, handleAccountInfoRequest);
}

function* handleResetPasswordRequest(action) {
  const { email, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(resetPassword, email);

    if (!res) throw new Error('connection error');

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchResetPasswordRequest() {
  yield takeLatest(RESET_PASSWORD_REQUEST, handleResetPasswordRequest);
}

function* handleChangePasswordRequest(action) {
  const { oldPassword, newPassword, confirmPassword, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(changePassword, oldPassword, newPassword, confirmPassword);

    if (!res) throw new Error('connection error');

    if (!res.status) throw new Error(res.data.message);

    const { userId, isVerified, accessToken, refreshToken } = res.data;

    yield put(authInfoUpdate(userId, isVerified, accessToken, refreshToken));

    if (callbackSuccess) callbackSuccess('Password Successfully Changed');
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchChangePasswordRequest() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, handleChangePasswordRequest);
}

function* handleUpdateAccountInfoRequest(action) {
  const { phone, address, firstName, lastName, district, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(updateAccountInfo, phone, address, firstName, lastName, district);

    if (!res) throw new Error('connection error');

    const account = res.data;

    yield put(accountInfoUpdate(account));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchUpdateAccountInfoRequest() {
  yield takeLatest(UPDATE_ACCOUNT_INFO_REQUEST, handleUpdateAccountInfoRequest);
}

export default function* accountSaga() {
  yield all([
    watchAccountInfoRequest(),
    watchResetPasswordRequest(),
    watchChangePasswordRequest(),
    watchUpdateAccountInfoRequest(),
  ]);
}
