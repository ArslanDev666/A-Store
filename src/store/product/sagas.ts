import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getProduct } from 'api/product';

import { notificationsActions } from '../notifications';

import { productActions, StateProductType } from './slice';
import { getProductPayloadType } from './types';

export function* getProductsSaga(action: PayloadAction<getProductPayloadType>) {
  try {
    const product: StateProductType = yield call(getProduct, action.payload.id);

    yield put(productActions.success(product));
  } catch (e) {
    yield put(productActions.failure());
    yield put(notificationsActions.error({ title: 'Произошла ошибка' }));
  }
}

export function* watchProductSaga() {
  yield takeLatest(productActions.request.type, getProductsSaga);
}
