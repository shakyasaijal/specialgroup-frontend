import { takeLatest, all, select, put } from 'redux-saga/effects';

import { NOTIFICATION_TIMESTAMP_REQUEST, notificationTSUpdate } from 'actions/notificationTS';

import { getAuth } from 'selectors/auth';

function* handleNotificationTSRequest(action) {
  const { field, callbackSuccess, callbackError } = action;

  try {
    const auth = yield select(getAuth);
    const d = new Date();
    const ts = d.getTime();
    const tsVar = { [field + auth.userId]: ts };

    yield put(notificationTSUpdate(tsVar));
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
