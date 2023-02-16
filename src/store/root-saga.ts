import { fork } from 'redux-saga/effects';

import { watchOwnDesignProductsSaga } from './products';

export function* rootSaga() {
  yield fork(watchOwnDesignProductsSaga);
}
