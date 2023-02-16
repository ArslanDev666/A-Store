import { fork } from 'redux-saga/effects';

import { watchOwnDesignSaga } from './own-design';
import { watchProductSaga } from './product';

export function* rootSaga() {
  yield fork(watchOwnDesignSaga);
  yield fork(watchProductSaga);
}
