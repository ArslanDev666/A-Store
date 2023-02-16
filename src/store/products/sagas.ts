import { call, put, takeLatest } from 'redux-saga/effects';

import { getOwnDesignProducts } from 'api/products';

import { CategoryType } from 'types/product-category';

import { notificationsActions } from '../notifications';

import { ownDesignProductsActions } from './slice';

function* getOwnDesignProductsSaga() {
  try {
    const categories: CategoryType[] = yield call(getOwnDesignProducts);

    yield put(ownDesignProductsActions.success(categories));
  } catch (e) {
    yield put(ownDesignProductsActions.failure());
    yield put(notificationsActions.error({ title: 'Произошла ошибка' }));
  }
}

export function* watchOwnDesignProductsSaga() {
  yield takeLatest(
    ownDesignProductsActions.request.type,
    getOwnDesignProductsSaga
  );
}
