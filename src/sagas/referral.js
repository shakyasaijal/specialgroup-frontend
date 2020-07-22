import { takeLatest, call, all, put } from 'redux-saga/effects';
import { REFERRAL_LINK_REQUEST, referralLinkUpdate, HANDLE_CLICK_REQUEST } from 'actions/referral';

import Referral from 'api/referral';

function* handleReferralLinkRequest(action) {
  const { callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Referral.get);

    if (!res) throw new Error('connection error');
    const referral = res.data;

    yield put(referralLinkUpdate(referral));
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchReferralLinkRequest() {
  yield takeLatest(REFERRAL_LINK_REQUEST, handleReferralLinkRequest);
}

function* handleClickRequest(action) {
  const { code, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(Referral.handleClick, code);

    if (!res && !res.status) throw new Error('connection error');

    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e);
  }
}

function* watchHandleClickRequest() {
  yield takeLatest(HANDLE_CLICK_REQUEST, handleClickRequest);
}

export default function* referralSaga() {
  yield all([watchReferralLinkRequest(), watchHandleClickRequest()]);
}
