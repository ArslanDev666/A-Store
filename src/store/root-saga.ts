import { fork } from 'redux-saga/effects';

import { watchProductSaga } from './product';
import { watchOwnDesignProductsSaga } from './products';

export function* rootSaga() {
  yield fork(watchOwnDesignProductsSaga);
  yield fork(watchProductSaga);
}
