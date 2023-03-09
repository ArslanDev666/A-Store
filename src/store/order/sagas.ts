import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { createOrder } from 'api/order';

import { notificationsActions } from '../notifications';

import { orderActions } from './slice';
import { CreateOrderActionType } from './types';

export function* createOrderSaga(action: PayloadAction<CreateOrderActionType>) {
  try {
    const data: string = yield call(createOrder, action.payload);

    yield put(orderActions.success());
    yield put(notificationsActions.success({ title: data }));
  } catch (e) {
    yield put(orderActions.failure());
    yield put(notificationsActions.error({ title: 'Произошла ошибка' }));
  }
}

export function* watchCreateOrderSaga() {
  yield takeLatest(orderActions.create.type, createOrderSaga);
}
