import { all } from 'redux-saga/effects';

import authSaga from './auth';
import accountSaga from './account';
import publicSaga from './publicSaga';
import productSaga from './product';

export default function* rootSaga() {
  yield all([authSaga(), accountSaga(), publicSaga(), productSaga()]);
}
