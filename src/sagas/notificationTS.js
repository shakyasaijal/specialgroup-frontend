import { put, takeLatest, all } from 'redux-saga/effects';

import { notificationTSUpdate, NOTIFICATION_TIMESTAMP_REQUEST } from 'actions/notificationTimeStamp';

function* handleNotificationTSRequest(action) {
  const { field, callbackSuccess, callbackError } = action;

  try {
    const d = new Date();
    const ts = d.getTime();
    const tsMap = { [field]: ts };

    yield put(notificationTSUpdate(tsMap));
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
