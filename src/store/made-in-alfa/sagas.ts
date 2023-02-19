import { call, put, takeLatest } from 'redux-saga/effects';

import { getMadeInAlfaProducts } from 'api/products';

import { notificationsActions } from '../notifications';

import { ProductType } from './../../types/product';
import { madeInAlfaActions } from './slice';

export function* getMadeInAlfaSaga() {
  try {
    const products: ProductType[] = yield call(getMadeInAlfaProducts);

    yield put(madeInAlfaActions.success(products));
  } catch (e) {
    yield put(madeInAlfaActions.failure());
    yield put(notificationsActions.error({ title: 'Произошла ошибка' }));
  }
}

export function* watchMadeInAlfaSaga() {
  yield takeLatest(madeInAlfaActions.request.type, getMadeInAlfaSaga);
}
