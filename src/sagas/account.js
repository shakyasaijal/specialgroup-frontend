import { takeLatest, call, all, put } from 'redux-saga/effects';

import { getAccountInfo, resetPassword } from 'api/account';

import { ACCOUNT_INFO_REQUEST, accountInfoUpdate, PASSWORD_RESET_REQUEST } from 'actions/account';

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

function* handlePasswordResetRequest(action) {
  const { email, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(resetPassword, email);

    if (!res) throw new Error('connection error');

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchPasswordResetRequest() {
  yield takeLatest(PASSWORD_RESET_REQUEST, handlePasswordResetRequest);
}

export default function* accountSaga() {
  yield all([watchAccountInfoRequest(), watchPasswordResetRequest()]);
}
