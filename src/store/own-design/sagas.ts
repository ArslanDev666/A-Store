import { call, put, takeLatest } from 'redux-saga/effects';

import { getOwnDesignProducts } from 'api/products';

import { CategoryType } from 'types/product-category';

import { notificationsActions } from '../notifications';

import { ownDesignActions } from './slice';

function* getOwnDesignSaga() {
  try {
    const categories: CategoryType[] = yield call(getOwnDesignProducts);

    yield put(ownDesignActions.success(categories));
  } catch (e) {
    yield put(ownDesignActions.failure());
    yield put(notificationsActions.error({ title: 'Произошла ошибка' }));
  }
}

export function* watchOwnDesignSaga() {
  yield takeLatest(ownDesignActions.request.type, getOwnDesignSaga);
}
