import { all } from 'redux-saga/effects';

import authSaga from './auth';
import accountSaga from './account';
import publicSaga from './publicSaga';
import notificationTSSaga from './notificationTS';
import productSaga from './product';
import cartSaga from './cart';

export default function* rootSaga() {
  yield all([authSaga(), accountSaga(), publicSaga(), notificationTSSaga(), productSaga(), cartSaga()]);
}
