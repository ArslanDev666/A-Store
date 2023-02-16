import { fork } from 'redux-saga/effects';

import { watchMadeInAlfaSaga } from './made-in-alfa';
import { watchOwnDesignSaga } from './own-design';
import { watchProductSaga } from './product';

export function* rootSaga() {
  yield fork(watchOwnDesignSaga);
  yield fork(watchMadeInAlfaSaga);
  yield fork(watchProductSaga);
}
