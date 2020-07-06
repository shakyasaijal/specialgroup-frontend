import { takeLatest, all, select } from 'redux-saga/effects';

import { NOTIFICATION_TIMESTAMP_REQUEST } from 'actions/notificationTimeStamp';

import { getAuth } from 'selectors/auth';

function* handleNotificationTSRequest(action) {
  const { field, callbackSuccess, callbackError } = action;

  try {
    const auth = yield select(getAuth);
    const d = new Date();
    const ts = d.getTime();
    const tsVar = field + auth.userId;

    localStorage.setItem(tsVar, ts);
    if (callbackSuccess) callbackSuccess();
  } catch (e) {
    if (callbackError) callbackError(e.message);
  }
}

function* watchCompleteProfileRequest() {
  yield takeLatest(NOTIFICATION_TIMESTAMP_REQUEST, handleNotificationTSRequest);
}

export default function* notificationTSSaga() {
  yield all([watchCompleteProfileRequest()]);
}
