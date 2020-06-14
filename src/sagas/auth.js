import { takeLatest, call, all, put } from 'redux-saga/effects';
import { login } from 'api/auth';
import { authInfoUpdate, AUTH_LOGIN_REQUEST } from 'actions/auth';

function* handleAuthLoginRequest(action) {
  const { email, password, csrfmiddlewaretoken, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(login, email, password, csrfmiddlewaretoken);

    if (!res) throw new Error('connection error');

    const { userId, accessToken, refreshToken } = res.data;

    if (!userId || !accessToken || refreshToken) {
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
  yield all([watchAuthLoginRequest()]);
}
