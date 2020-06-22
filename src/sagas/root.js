import { all } from 'redux-saga/effects';

import authSaga from './auth';
import accountSaga from './account';
import publicSaga from './publicSaga';

export default function* rootSaga() {
  yield all([authSaga(), accountSaga(), publicSaga()]);
}
